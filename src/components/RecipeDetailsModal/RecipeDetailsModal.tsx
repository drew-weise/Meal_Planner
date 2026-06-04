import type { Recipe } from "../../types/food";
import Modal from "../Modal/Modal";
import "./RecipeDetailsModal.css";

type RecipeDetailsModalProps = {
  recipe: Recipe;
  onClose: () => void;
};

function RecipeDetailsModal({
  recipe,
  onClose,
}: RecipeDetailsModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="recipe-details-modal">

        <div className="recipe-details-header">
          <div>
            <h2>{recipe.name}</h2>

            <p>
              {recipe.servings} serving
              {recipe.servings > 1 ? "s" : ""} • {recipe.prepTime} min
            </p>
          </div>

          <button
            className="recipe-details-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="recipe-details-macros">
          <span>{recipe.calories} cal</span>
          <span>{recipe.protein}g protein</span>
          <span>{recipe.carbs}g carbs</span>
          <span>{recipe.fat}g fat</span>
        </div>

        <section>
          <h3>Ingredients</h3>

          <p>
            {recipe.ingredients.length} ingredients
          </p>
        </section>

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
    </Modal>
  );
}

export default RecipeDetailsModal;