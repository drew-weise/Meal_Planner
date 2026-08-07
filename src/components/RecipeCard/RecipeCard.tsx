// MealCard.tsx
import "./RecipeCard.css";
import type { Nutrition } from "../../types/nutrition";
import type { Recipe } from "../../types/recipes";
import { ingredients } from "../../data/ingredientsData";
import { useState } from "react";

type RecipeCardProps = {
  recipe: Recipe;
};

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

export default function RecipeCard(props: RecipeCardProps) {
  const recipe = props.recipe;
  const nutrition = calculateMealNutrition(recipe);
  const [showDetails, setShowDetails] = useState(false);


  console.log(showDetails);

  return (
    <article className="recipe-card">
      <header className="recipe-card__header">
        <h2>{recipe.name}</h2>
      </header>

      <div className="recipe-card__image">
        <span>Recipe image</span>
      </div>

      <div className="recipe-card__content">
        <div className="recipe-card__nutrition">
          <div>
            <strong>{Math.round(nutrition.calories)}</strong>
            <span>Calories</span>
          </div>

          <div>
            <strong>{Math.round(nutrition.protein)}g</strong>
            <span>Protein</span>
          </div>

          <div>
            <strong>{Math.round(nutrition.carbs)}g</strong>
            <span>Carbs</span>
          </div>

          <div>
            <strong>{Math.round(nutrition.fat)}g</strong>
            <span>Fat</span>
          </div>
        </div>

        <div className="recipe-card__actions">
          <button
            type="button"
            className="recipe-card__details-button"
            onClick={() => setShowDetails(!showDetails)}
          >
            Details
          </button>

          <button
            type="button"
            className="recipe-card__add-button">
            Add to plan
          </button>

        </div>
      </div>
    </article>
  );
}