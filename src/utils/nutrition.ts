// utils/nutrition.ts

import type { Nutrition } from "../types/nutrition";
import type { Recipe } from "../types/recipes";
import { ingredients } from "../data/ingredientsData";

function calculateMealNutrition(recipe: Recipe): Nutrition {
  const total: Nutrition = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };

  for (const ingredientReference of recipe.ingredients) {
    let matchingIngredient;

    for (const ingredient of ingredients) {
      if (ingredient.id === ingredientReference.ingredientId) {
        matchingIngredient = ingredient;
        break;
      }
    }

    if (!matchingIngredient) {
      continue;
    }

    total.calories += matchingIngredient.nutrition.calories * ingredientReference.quantity;

    total.protein += matchingIngredient.nutrition.protein * ingredientReference.quantity;

    total.carbs += matchingIngredient.nutrition.carbs * ingredientReference.quantity;

    total.fat += matchingIngredient.nutrition.fat * ingredientReference.quantity;
  }

  return total;
}

export default function calculateRecipeNutrition(recipe: Recipe): Nutrition {
  return calculateMealNutrition(recipe);
}