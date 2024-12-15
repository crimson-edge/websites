interface BMRInput {
  age: number;
  weight: number; // in pounds
  height: number; // in inches
  activityLevel: number;
}

interface BMRResult {
  baseBMR: number;
  tdee: number;
  recommendations: string[];
}

export function calculateBMR(input: BMRInput): BMRResult {
  // Convert weight to kg and height to cm for the Mifflin-St Jeor Equation
  const weightInKg = input.weight * 0.453592;
  const heightInCm = input.height * 2.54;
  
  // Calculate base BMR using Mifflin-St Jeor Equation
  const baseBMR = (10 * weightInKg) + (6.25 * heightInCm) - (5 * input.age) + 5;
  
  // Calculate Total Daily Energy Expenditure (TDEE)
  const tdee = baseBMR * input.activityLevel;
  
  // Generate recommendations based on age and activity level
  const recommendations = generateRecommendations(input, baseBMR, tdee);
  
  return {
    baseBMR: Math.round(baseBMR),
    tdee: Math.round(tdee),
    recommendations
  };
}

function generateRecommendations(input: BMRInput, bmr: number, tdee: number): string[] {
  const recommendations: string[] = [];
  
  // Age-specific recommendations
  if (input.age >= 50) {
    recommendations.push("Consider increasing protein intake to 1.2-1.6g per pound of body weight to maintain muscle mass");
    recommendations.push("Focus on nutrient-dense foods to support hormone optimization");
  } else {
    recommendations.push("Aim for 1-1.2g of protein per pound of body weight for muscle maintenance and growth");
  }
  
  // Activity level recommendations
  if (input.activityLevel <= 1.2) {
    recommendations.push("Consider adding light exercise like walking or swimming to increase daily calorie burn");
    recommendations.push("Break up long periods of sitting with short movement breaks");
  } else if (input.activityLevel >= 1.725) {
    recommendations.push("Ensure adequate recovery between intense training sessions");
    recommendations.push("Consider periodic deload weeks to prevent overtraining");
  }
  
  // General recommendations
  recommendations.push("Stay hydrated by drinking at least half your body weight (in pounds) in ounces of water daily");
  recommendations.push("Track your food intake for a few weeks to ensure you're meeting your calorie targets");
  
  return recommendations;
}
