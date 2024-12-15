interface JointStatus {
  mobility: number;
  pain: number;
  strength: number;
}

interface ExerciseRecommendation {
  name: string;
  difficulty: string;
  description: string;
  benefits: string[];
  precautions?: string[];
  alternatives?: string[];
}

export const assessMobility = (
  shoulderMobility: number,
  hipMobility: number,
  ankleMobility: number,
  spinalMobility: number
): { score: number; recommendations: string[] } => {
  const totalScore = (shoulderMobility + hipMobility + ankleMobility + spinalMobility) / 4;
  const recommendations: string[] = [];

  if (shoulderMobility < 7) {
    recommendations.push("Focus on shoulder mobility work: Wall slides, arm circles, band pull-aparts");
  }
  if (hipMobility < 7) {
    recommendations.push("Improve hip mobility: Hip flexor stretches, 90/90 stretches, deep squats");
  }
  if (ankleMobility < 7) {
    recommendations.push("Work on ankle mobility: Calf stretches, ankle rotations, wall ankle mobilization");
  }
  if (spinalMobility < 7) {
    recommendations.push("Enhance spine mobility: Cat-cow stretches, thoracic extensions, controlled rotations");
  }

  return { score: totalScore, recommendations };
};

export const getExerciseRecommendations = (
  targetMuscle: string,
  jointHealth: JointStatus,
  experienceLevel: string
): ExerciseRecommendation[] => {
  const exercises: { [key: string]: ExerciseRecommendation[] } = {
    chest: [
      {
        name: "Floor Press",
        difficulty: "Beginner",
        description: "Bench press performed from the floor to reduce shoulder stress",
        benefits: ["Reduced shoulder stress", "Good chest activation", "Safe endpoint"],
        precautions: ["Maintain neutral spine", "Keep elbows at 45 degrees"]
      },
      {
        name: "Incline Push-Ups",
        difficulty: "Beginner",
        description: "Push-ups performed with hands elevated to reduce load",
        benefits: ["Scalable difficulty", "Joint-friendly", "Natural movement pattern"]
      },
      {
        name: "Cable Chest Press",
        difficulty: "Intermediate",
        description: "Standing chest press using cables for constant tension",
        benefits: ["Controlled movement", "Variable angles", "Less joint stress"]
      }
    ],
    back: [
      {
        name: "Supported Row",
        difficulty: "Beginner",
        description: "Row variation with chest supported to protect lower back",
        benefits: ["Reduced lower back stress", "Isolated back work", "Good mind-muscle connection"]
      },
      {
        name: "Single-Arm Cable Row",
        difficulty: "Intermediate",
        description: "Unilateral row using cable machine",
        benefits: ["Core engagement", "Natural movement", "Even development"]
      }
    ],
    legs: [
      {
        name: "Box Squat",
        difficulty: "Beginner",
        description: "Squat to box for controlled depth and reduced knee stress",
        benefits: ["Controlled depth", "Reduced knee stress", "Power development"]
      },
      {
        name: "Trap Bar Deadlift",
        difficulty: "Intermediate",
        description: "Deadlift variation with more upright posture",
        benefits: ["Reduced lower back stress", "Natural movement pattern", "Heavy loading potential"]
      }
    ]
  };

  let recommendations = exercises[targetMuscle] || [];

  // Filter based on joint health and experience
  recommendations = recommendations.filter(exercise => {
    if (jointHealth.pain > 7) {
      return exercise.difficulty === "Beginner";
    }
    if (experienceLevel === "beginner") {
      return exercise.difficulty !== "Advanced";
    }
    return true;
  });

  return recommendations;
};

export function calculateRecoveryNeeds(
  age: number,
  intensity: number,
  volume: number,
  sleep: number,
  stress: number
): {
  recoveryDays: number;
  recoveryFactors: string[];
  recommendations: string[];
} {
  // Base recovery time (in days)
  let recoveryDays = 1;

  // Age factor
  if (age >= 40 && age < 50) recoveryDays += 0.5;
  else if (age >= 50 && age < 60) recoveryDays += 1;
  else if (age >= 60) recoveryDays += 1.5;

  // Intensity factor
  if (intensity >= 8) recoveryDays += 1;
  else if (intensity >= 6) recoveryDays += 0.5;

  // Volume factor
  if (volume >= 25) recoveryDays += 1;
  else if (volume >= 15) recoveryDays += 0.5;

  // Sleep quality factor
  if (sleep <= 5) recoveryDays += 1;
  else if (sleep <= 7) recoveryDays += 0.5;

  // Stress factor
  if (stress >= 8) recoveryDays += 1;
  else if (stress >= 6) recoveryDays += 0.5;

  const recoveryFactors = [];
  const recommendations = [];

  // Generate recovery factors
  if (age >= 50) recoveryFactors.push("Age increases recovery needs");
  if (intensity >= 8) recoveryFactors.push("High intensity training");
  if (volume >= 20) recoveryFactors.push("High training volume");
  if (sleep <= 6) recoveryFactors.push("Suboptimal sleep quality");
  if (stress >= 7) recoveryFactors.push("Elevated stress levels");

  // Generate recommendations
  if (sleep <= 6) recommendations.push("Prioritize sleep hygiene");
  if (stress >= 7) recommendations.push("Implement stress management techniques");
  if (intensity >= 8) recommendations.push("Consider reducing training intensity");
  if (volume >= 25) recommendations.push("Reduce training volume temporarily");

  return {
    recoveryDays: Math.round(recoveryDays * 2) / 2, // Round to nearest 0.5
    recoveryFactors,
    recommendations
  };
}

export function calculateProgressiveOverload(
  exercise: string,
  currentWeight: number,
  currentReps: number,
  currentSets: number,
  experience: string,
  recovery: string
): {
  weeklyWeight: number;
  weeklyReps: number;
  weeklySets: number;
  focusAreas: string[];
  monthlyWeightIncrease: number;
  monthlyVolumeIncrease: number;
  monthlyCheckpoints: string[];
  longTermGoals: string[];
  deloadStrategy: string[];
  safetyTips: string[];
} {
  // Calculate weekly progression based on experience level
  let weightIncrement = 0;
  let repIncrement = 0;
  let setIncrement = 0;

  switch (experience) {
    case 'beginner':
      weightIncrement = exercise === 'compound' ? 5 : 2.5;
      repIncrement = 1;
      setIncrement = 1;
      break;
    case 'intermediate':
      weightIncrement = exercise === 'compound' ? 2.5 : 1.25;
      repIncrement = 1;
      setIncrement = 0;
      break;
    case 'advanced':
      weightIncrement = exercise === 'compound' ? 1.25 : 0.5;
      repIncrement = 0;
      setIncrement = 0;
      break;
  }

  // Adjust based on recovery capacity
  if (recovery === 'low') {
    weightIncrement *= 0.5;
    repIncrement = 0;
    setIncrement = 0;
  } else if (recovery === 'medium') {
    weightIncrement *= 0.75;
  }

  const weeklyWeight = currentWeight + weightIncrement;
  const weeklyReps = currentReps + repIncrement;
  const weeklySets = currentSets + setIncrement;

  // Generate focus areas
  const focusAreas = [
    "Perfect form execution",
    "Controlled tempo",
    "Full range of motion",
    experience === 'beginner' ? "Building consistency" : "Maintaining intensity"
  ];

  // Calculate monthly projections
  const monthlyWeightIncrease = weightIncrement * 4;
  const monthlyVolumeIncrease = 5; // 5% increase in total volume

  // Generate monthly checkpoints
  const monthlyCheckpoints = [
    "Review form on video",
    "Assess recovery quality",
    "Track strength progress",
    "Evaluate joint health"
  ];

  // Generate long-term goals
  const longTermGoals = [
    `Target weight: ${currentWeight + (weightIncrement * 12)}lbs`,
    "Maintain perfect form",
    "Build work capacity",
    "Improve mind-muscle connection"
  ];

  // Generate deload strategy
  const deloadStrategy = [
    "Reduce weight by 40-50%",
    "Maintain rep range",
    "Focus on form and tempo",
    "One week every 6-8 weeks"
  ];

  // Generate safety tips
  const safetyTips = [
    "Always warm up properly",
    "Stop if form deteriorates",
    "Listen to your body",
    "Track joint health"
  ];

  return {
    weeklyWeight,
    weeklyReps,
    weeklySets,
    focusAreas,
    monthlyWeightIncrease,
    monthlyVolumeIncrease,
    monthlyCheckpoints,
    longTermGoals,
    deloadStrategy,
    safetyTips
  };
}
