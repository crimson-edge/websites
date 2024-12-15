// Body Composition Calculations
export const calculateMMI = (weight: number, height: number): number => {
  // Muscle Mass Index = Weight (kg) / height (m)²
  const weightInKg = weight * 0.453592;
  const heightInM = height * 0.0254;
  return weightInKg / (heightInM * heightInM);
};

export const calculateWHR = (waist: number, hip: number): number => {
  // Waist-to-Hip Ratio = Waist circumference / Hip circumference
  return waist / hip;
};

export const calculateBodyFat = (
  waist: number,
  neck: number,
  height: number
): number => {
  // U.S. Navy Method for men
  // 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76
  return (
    86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
  );
};

// Training Volume Calculations
export const calculateWeeklyVolume = (
  exerciseType: string,
  experienceLevel: string
): { minSets: number; maxSets: number } => {
  const volumeRanges = {
    beginner: {
      compound: { min: 10, max: 15 },
      isolation: { min: 8, max: 12 },
    },
    intermediate: {
      compound: { min: 12, max: 18 },
      isolation: { min: 10, max: 15 },
    },
    advanced: {
      compound: { min: 15, max: 20 },
      isolation: { min: 12, max: 18 },
    },
  };

  const level = volumeRanges[experienceLevel as keyof typeof volumeRanges];
  const type = level[exerciseType as keyof typeof level];
  return { minSets: type.min, maxSets: type.max };
};

// Recovery Time Estimation
export const calculateRecoveryTime = (
  age: number,
  intensity: string,
  sleepQuality: string,
  stressLevel: string
): number => {
  let baseRecovery = 24; // Base recovery time in hours

  // Age factor (increases recovery time as age increases)
  const ageFactor = Math.max(1, (age - 40) / 10 + 1);
  
  // Intensity multiplier
  const intensityMultipliers = {
    low: 1,
    moderate: 1.3,
    high: 1.6,
    very_high: 2
  };

  // Sleep quality factor
  const sleepFactors = {
    poor: 1.3,
    fair: 1.1,
    good: 1,
    excellent: 0.9
  };

  // Stress level factor
  const stressFactors = {
    low: 1,
    moderate: 1.2,
    high: 1.4,
    very_high: 1.6
  };

  return Math.round(
    baseRecovery *
    ageFactor *
    intensityMultipliers[intensity as keyof typeof intensityMultipliers] *
    sleepFactors[sleepQuality as keyof typeof sleepFactors] *
    stressFactors[stressLevel as keyof typeof stressFactors]
  );
};

// Nutrition Calculations
export const calculateProteinNeeds = (
  weight: number,
  activityLevel: string,
  goal: string
): { min: number; max: number } => {
  // Protein needs in g/lb of body weight
  const proteinFactors = {
    maintenance: { min: 0.8, max: 1.0 },
    fat_loss: { min: 1.0, max: 1.2 },
    muscle_gain: { min: 1.2, max: 1.4 }
  };

  const factor = proteinFactors[goal as keyof typeof proteinFactors];
  return {
    min: Math.round(weight * factor.min),
    max: Math.round(weight * factor.max)
  };
};

// Strength Standards
export const calculateStrengthStandards = (
  age: number,
  weight: number,
  exercise: string
): {
  beginner: number;
  intermediate: number;
  advanced: number;
} => {
  // Base multipliers for different exercises (as percentage of body weight)
  const baseMultipliers = {
    bench_press: { beginner: 0.8, intermediate: 1.2, advanced: 1.5 },
    squat: { beginner: 1.0, intermediate: 1.5, advanced: 2.0 },
    deadlift: { beginner: 1.2, intermediate: 1.8, advanced: 2.3 }
  };

  // Age adjustment factor (reduces expected strength by 1% per year over 40)
  const ageAdjustment = Math.max(0.7, 1 - (age - 40) * 0.01);

  const multipliers = baseMultipliers[exercise as keyof typeof baseMultipliers];
  return {
    beginner: Math.round(weight * multipliers.beginner * ageAdjustment),
    intermediate: Math.round(weight * multipliers.intermediate * ageAdjustment),
    advanced: Math.round(weight * multipliers.advanced * ageAdjustment)
  };
};
