// utils/nutrition.ts

import type { Nutrition } from "../types/nutrition";
import type { Recipe } from "../types/recipes";
import getDetailedRecipeIngredients from "./recipeIngredientDetails";

function calculateMealNutrition(recipe: Recipe): Nutrition {
  const detailedRecipeIngredients = getDetailedRecipeIngredients(recipe);
  const total: Nutrition = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };

  for (const details of detailedRecipeIngredients) {
    total.calories += details.ingredient.nutrition.calories * details.quantity;

    total.protein += details.ingredient.nutrition.protein * details.quantity;

    total.carbs += details.ingredient.nutrition.carbs * details.quantity;

    total.fat += details.ingredient.nutrition.fat * details.quantity;

  }
  return total;
}

export default function calculateRecipeNutrition(recipe: Recipe): Nutrition {
  return calculateMealNutrition(recipe);
}