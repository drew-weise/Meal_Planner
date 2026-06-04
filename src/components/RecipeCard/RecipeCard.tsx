import { useState } from "react";
import type { Recipe } from "../../types/food";
import "./RecipeCard.css";

type RecipeCardProps = {
  recipe: Recipe;
  showPhotos: boolean;
};

function RecipeCard({ recipe, showPhotos }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="recipe-card">
      {showPhotos && <div className="recipe-image-placeholder" />}

      <div className="recipe-card-content">
        <div className="recipe-card-top">
          <div>
            <h2>{recipe.name}</h2>

            <p className="recipe-summary">
              {recipe.calories} cal • {" "}
              {recipe.servings} serving
              {recipe.servings > 1 ? "s" : ""} • {recipe.prepTime} min
            </p>

          </div>

          <span className="recipe-type">{recipe.type}</span>
        </div>

        <button
          className="details-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Hide details" : "View details"}
        </button>

        {isExpanded && (
          <div className="recipe-details">
            <section>
              <h3>Instructions</h3>

              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </section>

            {recipe.notes && (
              <section>
                <h3>Notes</h3>
                <p>{recipe.notes}</p>
              </section>
            )}

            <button className="edit-recipe-button">
              Edit Recipe
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default RecipeCard;