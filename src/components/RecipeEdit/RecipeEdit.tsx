// RecipeEdit.tsx
import "./RecipeEdit.css";
import type { Recipe } from "../../types/recipes";
import calculateRecipeNutrition from "../../utils/nutrition";
import getDetailedRecipeIngredients from "../../utils/recipeIngredientDetails";

type RecipeEditProps = {
  recipe: Recipe;
  onBack: (recipe: Recipe | null) => void;
};

export default function RecipeEdit(props: RecipeEditProps) {
  const recipe = props.recipe;
  const onBack = props.onBack;
  

  const nutrition = calculateRecipeNutrition(recipe);
  const detailedRecipeIngredients = getDetailedRecipeIngredients(recipe);

  return (
    <article className="recipe-edit">
      <header className="recipe-edit__header">
        <button onClick={() => onBack(null)}>←</button>
        <h2>{recipe.name}</h2>
      </header>

      <div className="recipe-edit__image">
        <span>Recipe image</span>
      </div>

      <div className="recipe-edit__content">
        <section className="recipe-edit__nutrition">
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

        <section className="recipe-edit__ingredients">
          <h3>Ingredients</h3>

          {detailedRecipeIngredients.map((details) => (
            <div
              className="recipe-edit__ingredient"
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

        <section className="recipe-edit__instructions">
          <h3>Instructions</h3>

          {recipe.instructions?.map((instruction, index) => (
            <div
              className="recipe-edit__instruction"
              key={index}
            >
              {index + 1}. {instruction}
            </div>
          ))}
        </section>

        <div className="recipe-edit_buttons">
            <button className="recipe-save__edit">
            Save Recipe
            </button>        
            
            <button className="recipe-cancel__edit">
            Cancel
            </button>
        </div>

      </div>
    </article>
  );
}