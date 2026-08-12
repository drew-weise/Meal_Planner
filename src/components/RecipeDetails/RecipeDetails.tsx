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
        <button onClick={() => onBack(null)}>←</button>
        <h2>{recipe.name}</h2>
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
          <h3>Ingredients</h3>

          {detailedRecipeIngredients.map((details) => (
            <div
              className="recipe-details__ingredient"
              key={details.ingredient.id}
            >
              <span>{details.ingredient.name}</span>

              <span>
                {details.ingredient.servingAmount * details.quantity}
                {details.ingredient.servingUnit}
              </span>
            </div>
          ))}
        </section>

        <section className="recipe-details__instructions">
          <h3>Instructions</h3>

          {recipe.instructions?.map((instruction, index) => (
            <div
              className="recipe-details__instruction"
              key={index}
            >
              {index + 1}. {instruction}
            </div>
          ))}
        </section>

        <button className="recipe-details__edit">
          Edit Recipe
        </button>
      </div>
    </article>
  );
}