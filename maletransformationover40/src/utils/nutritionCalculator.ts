interface NutritionInput {
  age: number;
  weight: number; // in pounds
  height: number; // in inches
  activityLevel: number;
  goal: 'lose' | 'maintain' | 'gain';
  mealsPerDay: number;
}

interface MacroBreakdown {
  protein: number;
  carbs: number;
  fats: number;
}

interface MealTiming {
  meal: string;
  timing: string;
  macros: MacroBreakdown;
  notes: string;
}

interface NutritionResult {
  totalCalories: number;
  macros: MacroBreakdown;
  proteinPerMeal: number;
  mealPlan: MealTiming[];
  recommendations: string[];
}

export function calculateNutrition(input: NutritionInput): NutritionResult {
  // Calculate base calories using Mifflin-St Jeor
  const weightInKg = input.weight * 0.453592;
  const heightInCm = input.height * 2.54;
  const bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * input.age) + 5;
  let totalCalories = Math.round(bmr * input.activityLevel);

  // Adjust calories based on goal
  switch (input.goal) {
    case 'lose':
      totalCalories -= 500; // Create deficit for fat loss
      break;
    case 'gain':
      totalCalories += 300; // Create surplus for muscle gain
      break;
  }

  // Calculate macros
  const macros = calculateMacros(input, totalCalories);
  const proteinPerMeal = Math.round(macros.protein / input.mealsPerDay);
  const mealPlan = generateMealPlan(input, macros);
  const recommendations = generateRecommendations(input, macros, totalCalories);

  return {
    totalCalories,
    macros,
    proteinPerMeal,
    mealPlan,
    recommendations
  };
}

function calculateMacros(input: NutritionInput, totalCalories: number): MacroBreakdown {
  let proteinMultiplier: number;
  
  // Higher protein needs for older adults
  if (input.age >= 50) {
    proteinMultiplier = input.goal === 'gain' ? 1.2 : 1.0;
  } else {
    proteinMultiplier = input.goal === 'gain' ? 1.1 : 0.9;
  }

  const proteinGrams = Math.round(input.weight * proteinMultiplier);
  const proteinCalories = proteinGrams * 4;

  let fatPercentage: number;
  // Higher fat needs for hormone support in older adults
  if (input.age >= 50) {
    fatPercentage = 0.3; // 30% of calories from fat
  } else {
    fatPercentage = 0.25; // 25% of calories from fat
  }

  const fatCalories = totalCalories * fatPercentage;
  const fatGrams = Math.round(fatCalories / 9);

  const remainingCalories = totalCalories - proteinCalories - fatCalories;
  const carbGrams = Math.round(remainingCalories / 4);

  return {
    protein: proteinGrams,
    carbs: carbGrams,
    fats: fatGrams
  };
}

function generateMealPlan(input: NutritionInput, macros: MacroBreakdown): MealTiming[] {
  const mealPlan: MealTiming[] = [];
  const proteinPerMeal = Math.round(macros.protein / input.mealsPerDay);
  const carbsPerMeal = Math.round(macros.carbs / input.mealsPerDay);
  const fatsPerMeal = Math.round(macros.fats / input.mealsPerDay);

  // Breakfast
  mealPlan.push({
    meal: "Breakfast",
    timing: "Within 1 hour of waking",
    macros: {
      protein: proteinPerMeal,
      carbs: Math.round(carbsPerMeal * 1.2), // Slightly higher carbs in morning
      fats: Math.round(fatsPerMeal * 1.2)
    },
    notes: "Focus on slow-digesting carbs and protein"
  });

  // Pre-workout (if applicable)
  if (input.mealsPerDay >= 4) {
    mealPlan.push({
      meal: "Pre-workout",
      timing: "1-2 hours before training",
      macros: {
        protein: Math.round(proteinPerMeal * 0.8),
        carbs: Math.round(carbsPerMeal * 1.3),
        fats: Math.round(fatsPerMeal * 0.5)
      },
      notes: "Emphasize easily digestible carbs and moderate protein"
    });
  }

  // Post-workout
  mealPlan.push({
    meal: "Post-workout/Lunch",
    timing: "Within 1-2 hours after training",
    macros: {
      protein: Math.round(proteinPerMeal * 1.2),
      carbs: Math.round(carbsPerMeal * 1.3),
      fats: Math.round(fatsPerMeal * 0.8)
    },
    notes: "Higher protein and carbs for recovery"
  });

  // Additional meals based on mealsPerDay
  if (input.mealsPerDay >= 5) {
    mealPlan.push({
      meal: "Afternoon Snack",
      timing: "3-4 hours after lunch",
      macros: {
        protein: Math.round(proteinPerMeal * 0.8),
        carbs: Math.round(carbsPerMeal * 0.8),
        fats: Math.round(fatsPerMeal * 0.8)
      },
      notes: "Light meal to maintain energy"
    });
  }

  // Dinner
  mealPlan.push({
    meal: "Dinner",
    timing: "2-3 hours before bed",
    macros: {
      protein: proteinPerMeal,
      carbs: Math.round(carbsPerMeal * 0.8), // Lower carbs in evening
      fats: fatsPerMeal
    },
    notes: "Focus on protein and vegetables"
  });

  return mealPlan;
}

function generateRecommendations(input: NutritionInput, macros: MacroBreakdown, totalCalories: number): string[] {
  const recommendations: string[] = [];

  // Age-specific recommendations
  if (input.age >= 50) {
    recommendations.push("Prioritize protein intake to preserve muscle mass");
    recommendations.push("Include healthy fats to support hormone production");
  }

  // Goal-specific recommendations
  switch (input.goal) {
    case 'lose':
      recommendations.push(`Aim for a moderate deficit of 500 calories (${totalCalories} calories per day)`);
      recommendations.push("Focus on protein-rich foods to preserve muscle while losing fat");
      break;
    case 'maintain':
      recommendations.push(`Maintain your weight at ${totalCalories} calories per day`);
      recommendations.push("Balance your macros across meals for sustained energy");
      break;
    case 'gain':
      recommendations.push(`Create a slight surplus with ${totalCalories} calories per day`);
      recommendations.push("Emphasize post-workout nutrition for optimal muscle growth");
      break;
  }

  // Meal timing recommendations
  recommendations.push(`Spread your ${macros.protein}g of protein across ${input.mealsPerDay} meals`);
  recommendations.push("Have protein with every meal to maximize muscle protein synthesis");

  // General recommendations
  recommendations.push("Stay hydrated by drinking half your body weight (lbs) in ounces of water");
  recommendations.push("Consider taking vitamin D3 and omega-3 supplements for overall health");

  return recommendations;
}
