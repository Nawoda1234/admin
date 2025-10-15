// This file will hold all shared types for your application.

export type MealPlan = {
  id?: string; // The ID is optional because a new plan won't have one yet.
  user: string;
  name: string;
  calories: number;
};

export type Workout = {
  id?: string; // Also make this optional for the same reason.
  user: string;
  type: string;
  duration: number;
};