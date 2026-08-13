// RecipeDetails.tsx
import "./RecipeDetails.css";
import type { Recipe } from "../../types/recipes";

import calculateRecipeNutrition from "../../utils/nutrition";
import getDetailedRecipeIngredients from "../../utils/recipeIngredientDetails";

type RecipeDetailsProps = {
  recipe: Recipe;
  onBack: (recipe: Recipe | null) => void;
};

export default function RecipeDetails(props: RecipeDetailsProps) {
  const recipe = props.recipe;
  const onBack = props.onBack;

  const nutrition = calculateRecipeNutrition(recipe);
  const detailedRecipeIngredients = getDetailedRecipeIngredients(recipe);

  return (
    <article className="recipe-details">
      <header className="recipe-details__header">
        <button
          className="recipe-details__back-button"
          onClick={() => onBack(null)}
        >
          ←
        </button>

        <div className="recipe-details__header-info">
          <h2>{recipe.name}</h2>

          <span className="recipe-details__header-divider">|</span>

          <span className="recipe-details__servings">
            {recipe.servings} serving{recipe.servings !== 1 ? "s" : ""}
          </span>
        </div>

        <button className="recipe-details__edit-button">
          Edit
        </button>
      </header>

      <div className="recipe-details__image">
        <span>Recipe image</span>
      </div>

      <div className="recipe-details__content">
        <section className="recipe-details__nutrition">
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
        </section>

        <section className="recipe-details__ingredients">
          <div className="recipe-details__section-header">
            <h3>Ingredients</h3>
            <button className="recipe-details__section-edit">
              Edit
            </button>
          </div>

          {detailedRecipeIngredients.map((details) => (
            <div
              className="recipe-details__ingredient"
              key={details.ingredient.id}
            >
              <span>{details.ingredient.name}</span>

              <span className="recipe-details__ingredient-amount">
                {details.ingredient.servingAmount * details.quantity}
                {details.ingredient.servingUnit}
              </span>
            </div>
          ))}
        </section>

        <section className="recipe-details__instructions">
          <div className="recipe-details__section-header">
            <h3>Instructions</h3>
            <button className="recipe-details__section-edit">
              Edit
            </button>
          </div>

          {recipe.instructions?.map((instruction, index) => (
            <div
              className="recipe-details__instruction"
              key={index}
            >
              <span className="recipe-details__instruction-number">
                {index + 1}.
              </span>

              <span>{instruction}</span>
            </div>
          ))}
        </section>
      </div>
    </article>
  );
}