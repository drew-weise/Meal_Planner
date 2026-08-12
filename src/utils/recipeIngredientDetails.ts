import type { Recipe, RecipeIngredientDetails } from "../types/recipes";
import { ingredients } from "../data/ingredientsData";

export default function getDetailedRecipeIngredients(recipe: Recipe) {
    const ingredientDetails: RecipeIngredientDetails[] = [];

    for (const ingredientReference of recipe.recipeIngredients) {
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

        ingredientDetails.push({
            ingredient: matchingIngredient,
            quantity: ingredientReference.quantity,
        });
  }

  return ingredientDetails;
}