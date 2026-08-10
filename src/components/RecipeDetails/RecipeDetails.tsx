// MealCard.tsx
import "./RecipeDetails.css";
import type { Recipe } from "../../types/recipes";
import calculateRecipeNutrition from "../../utils/nutrition"; 
import { ingredients } from "../../data/ingredientsData";

type RecipeDetailsProps = {
  recipe: Recipe;
  onBack: (recipe: Recipe | null) => void;
};


export default function RecipeDetails(props: RecipeDetailsProps) {
  const recipe = props.recipe;
  const onBack = props.onBack;
  
  const nutrition = calculateRecipeNutrition(recipe);


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

    // { COMPLETE, INGREDIENT OBJECT???? STORE THE INGREDIENTS FOR USE LATER?
    //   name: 
    // }
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
        <div className="recipe-details__nutrition">
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


          <div className="recipe-details_ingredients">
              {recipe.ingredients.map((ingredient) => (
                <div>
                  {ingredient.ingredientId}
                </div>
              ))}
          </div>

          <div className="recipe-details_instructions">
              {recipe.instructions}
          </div>
        </div>

      </div>
    </article>
  );
}