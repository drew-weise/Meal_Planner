import { useState } from "react";
import type { Recipe } from "../../types/food";
import RecipeDetailsModal from "../RecipeDetailsModal/RecipeDetailsModal";
import "./RecipeCard.css";

type RecipeCardProps = {
  recipe: Recipe;
  showPhotos: boolean;
};

function RecipeCard({ recipe, showPhotos }: RecipeCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="recipe-card">
        {showPhotos && <div className="recipe-image-placeholder" />}

        <div className="recipe-card-content">
          <div className="recipe-card-top">
            <div>
              <h2>{recipe.name}</h2>

              <p className="recipe-summary">
                {recipe.calories} cal • {recipe.servings} serving
                {recipe.servings > 1 ? "s" : ""} • {recipe.prepTime} min
              </p>
            </div>

            <span className="recipe-type">{recipe.type}</span>
          </div>

          <button
            className="details-button"
            onClick={() => setShowDetails(true)}
          >
            View details
          </button>
        </div>
      </article>

      {showDetails && (
        <RecipeDetailsModal
          recipe={recipe}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}

export default RecipeCard;