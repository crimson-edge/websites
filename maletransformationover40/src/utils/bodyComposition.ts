interface BodyCompositionInput {
  age: number;
  weight: number;
  height: number;
  waist: number;
  hip: number;
  neck: number;
}

interface BodyCompositionResult {
  bodyFatPercentage: number;
  bodyFatCategory: string;
  mmi: number;
  mmiCategory: string;
  whr: number;
  whrCategory: string;
  analysis: string;
  details: string[];
  recommendations: string[];
}

export function calculateBodyComposition(input: BodyCompositionInput): BodyCompositionResult {
  // Calculate Body Fat Percentage using Navy Method
  const bodyFatPercentage = calculateNavyMethodBodyFat(input);
  const bodyFatCategory = getBodyFatCategory(bodyFatPercentage, input.age);

  // Calculate Muscle Mass Index
  const mmi = calculateMMI(input, bodyFatPercentage);
  const mmiCategory = getMMICategory(mmi, input.age);

  // Calculate Waist-to-Hip Ratio
  const whr = input.waist / input.hip;
  const whrCategory = getWHRCategory(whr);

  // Generate analysis and recommendations
  const { analysis, details, recommendations } = generateAnalysis({
    bodyFatPercentage,
    bodyFatCategory,
    mmi,
    mmiCategory,
    whr,
    whrCategory,
    age: input.age
  });

  return {
    bodyFatPercentage,
    bodyFatCategory,
    mmi,
    mmiCategory,
    whr,
    whrCategory,
    analysis,
    details,
    recommendations
  };
}

function calculateNavyMethodBodyFat(input: BodyCompositionInput): number {
  const { height, neck, waist, hip } = input;
  
  // Navy Method Formula for Men
  const logTerm = Math.log10(waist - neck);
  const logHeight = Math.log10(height);
  
  const bodyFat = 86.010 * logTerm - 70.041 * logHeight + 36.76;
  
  return Math.max(5, Math.min(bodyFat, 45)); // Clamp between 5% and 45%
}

function calculateMMI(input: BodyCompositionInput, bodyFatPercentage: number): number {
  const { weight, height } = input;
  const leanMass = weight * (1 - bodyFatPercentage / 100);
  const heightInMeters = height * 0.0254;
  
  return leanMass / (heightInMeters * heightInMeters);
}

function getBodyFatCategory(bodyFat: number, age: number): string {
  if (age < 50) {
    if (bodyFat < 14) return "Athletic";
    if (bodyFat < 18) return "Fit";
    if (bodyFat < 25) return "Average";
    return "Above Average";
  } else {
    if (bodyFat < 16) return "Athletic";
    if (bodyFat < 20) return "Fit";
    if (bodyFat < 27) return "Average";
    return "Above Average";
  }
}

function getMMICategory(mmi: number, age: number): string {
  if (age < 50) {
    if (mmi > 22) return "Excellent";
    if (mmi > 19) return "Good";
    if (mmi > 17) return "Average";
    return "Below Average";
  } else {
    if (mmi > 21) return "Excellent";
    if (mmi > 18) return "Good";
    if (mmi > 16) return "Average";
    return "Below Average";
  }
}

function getWHRCategory(whr: number): string {
  if (whr < 0.9) return "Low Risk";
  if (whr < 1.0) return "Moderate Risk";
  return "High Risk";
}

function generateAnalysis(results: any): {
  analysis: string;
  details: string[];
  recommendations: string[];
} {
  const analysis = `Based on your measurements, here's a comprehensive analysis of your body composition. Your results indicate a ${results.bodyFatCategory.toLowerCase()} body fat level, ${results.mmiCategory.toLowerCase()} muscle mass, and ${results.whrCategory.toLowerCase()} health profile based on your waist-to-hip ratio.`;

  const details = [
    `Your body fat percentage of ${results.bodyFatPercentage.toFixed(1)}% is ${results.bodyFatCategory.toLowerCase()} for your age group.`,
    `Your Muscle Mass Index of ${results.mmi.toFixed(1)} indicates ${results.mmiCategory.toLowerCase()} muscular development.`,
    `Your Waist-to-Hip ratio of ${results.whr.toFixed(2)} suggests a ${results.whrCategory.toLowerCase()} for metabolic health concerns.`
  ];

  const recommendations = generateRecommendations(results);

  return {
    analysis,
    details,
    recommendations
  };
}

function generateRecommendations(results: any): string[] {
  const recommendations: string[] = [];

  // Body Fat Recommendations
  if (results.bodyFatCategory === "Above Average") {
    recommendations.push("Focus on creating a moderate caloric deficit through diet and exercise");
    recommendations.push("Incorporate high-intensity interval training (HIIT) 2-3 times per week");
  } else if (results.bodyFatCategory === "Athletic" || results.bodyFatCategory === "Fit") {
    recommendations.push("Maintain current body composition through balanced nutrition");
    recommendations.push("Continue regular strength training to preserve muscle mass");
  }

  // MMI Recommendations
  if (results.mmiCategory === "Below Average") {
    recommendations.push("Prioritize progressive resistance training 3-4 times per week");
    recommendations.push("Increase protein intake to support muscle growth");
  } else if (results.mmiCategory === "Excellent") {
    recommendations.push("Continue current training routine while monitoring recovery");
    recommendations.push("Focus on maintaining strength and preventing injuries");
  }

  // WHR Recommendations
  if (results.whrCategory === "High Risk") {
    recommendations.push("Incorporate regular cardiovascular exercise to reduce abdominal fat");
    recommendations.push("Consider consulting with a healthcare provider about metabolic health");
  }

  // Age-specific recommendations
  if (results.age >= 50) {
    recommendations.push("Ensure adequate recovery between training sessions");
    recommendations.push("Include joint-friendly exercises in your routine");
  }

  return recommendations;
}
