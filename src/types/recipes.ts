import type { Ingredient } from "./ingredients";

export type RecipeIngredient = {
  ingredientId: number;
  quantity: number;
};

export type Recipe = {
  id: number;
  name: string;
  recipeIngredients: RecipeIngredient[];
  servings: number;
  instructions?: string[];
  notes?: string;
};

export type RecipeIngredientDetails = {
  ingredient: Ingredient;
  quantity: number;
};