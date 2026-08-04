import type { Nutrition } from "./nutrition";

export type Ingredient = {
  id: number;
  name: string;
  servingAmount: number;
  servingUnit: string;
  nutrition: Nutrition;
};

export type MealIngredient = {
  ingredientId: number;
  quantity: number;
};

export type Meal = {
  id: number;
  name: string;
  ingredients: MealIngredient[];
  servings: number;
  instructions?: string[];
  notes?: string;
};