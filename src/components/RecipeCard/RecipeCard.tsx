// MealCard.tsx
import "./RecipeCard.css";
import type { Recipe } from "../../types/recipes";
import calculateRecipeNutrition from "../../utils/nutrition"; 

type RecipeCardProps = {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
};

export default function RecipeCard(props: RecipeCardProps) {
  const recipe = props.recipe;
  const onSelect = props.onSelect;

  const nutrition = calculateRecipeNutrition(recipe);



  return (
    <article 
      className="recipe-card"
      onClick={() => onSelect(recipe)}
    >
      <header className="recipe-card__header">
        <h2>{recipe.name}</h2>
      </header>

      {/* <div className="recipe-card__image">
        <span>Recipe image</span>
      </div> */}

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

      </div>
    </article>
  );
}