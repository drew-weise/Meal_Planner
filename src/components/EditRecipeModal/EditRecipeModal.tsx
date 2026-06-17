import { useState } from "react";
import type { Recipe, RecipeIngredient, RecipeType } from "../../types/food";
import { ingredients as allIngredients } from "../../data/ingredients";
import Modal from "../Modal/Modal";
import "./EditRecipeModal.css";

type EditRecipeModalProps = {
  recipe: Recipe;
  onClose: () => void;
};

function EditRecipeModal({ recipe, onClose }: EditRecipeModalProps) {
  const [name, setName] = useState(recipe.name);
  const [type, setType] = useState<RecipeType>(recipe.type);
  const [servings, setServings] = useState(recipe.servings);
  const [prepTime, setPrepTime] = useState(recipe.prepTime);
  const [recipeIngredients, setRecipeIngredients] = useState<RecipeIngredient[]>(
    recipe.ingredients
  );
  const [instructionsText, setInstructionsText] = useState(
    recipe.instructions.join("\n")
  );
  const [notes, setNotes] = useState(recipe.notes ?? "");

  function getIngredientById(ingredientId: number) {
    return allIngredients.find((ingredient) => ingredient.id === ingredientId);
  }

  function updateIngredientAmount(index: number, newAmount: number) {
    const updatedIngredients = recipeIngredients.map((ingredient, currentIndex) => {
      if (currentIndex === index) {
        return {
          ...ingredient,
          amount: newAmount,
        };
      }

      return ingredient;
    });

    setRecipeIngredients(updatedIngredients);
  }

  function removeIngredient(index: number) {
    const updatedIngredients = recipeIngredients.filter(
      (_, currentIndex) => currentIndex !== index
    );

    setRecipeIngredients(updatedIngredients);
  }

  function handleAddIngredient() {
    const firstAvailableIngredient = allIngredients.find(
      (ingredient) =>
        !recipeIngredients.some(
          (recipeIngredient) => recipeIngredient.ingredientId === ingredient.id
        )
    );

    if (!firstAvailableIngredient) {
      alert("No more ingredients available.");
      return;
    }

    setRecipeIngredients([
      ...recipeIngredients,
      {
        ingredientId: firstAvailableIngredient.id,
        amount: firstAvailableIngredient.nutritionReferenceAmount,
      },
    ]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedRecipe: Recipe = {
      ...recipe,
      name,
      type,
      servings,
      prepTime,
      ingredients: recipeIngredients,
      instructions: instructionsText
        .split("\n")
        .map((step) => step.trim())
        .filter((step) => step !== ""),
      notes,
    };

    console.log("Updated recipe:", updatedRecipe);
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <form className="edit-recipe-modal" onSubmit={handleSubmit}>
        <div className="edit-recipe-header">
          <h2>Edit Recipe</h2>

          <button type="button" className="edit-recipe-close" onClick={onClose}>
            ×
          </button>
        </div>

        <label>
          Recipe name
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>

        <label>
          Type
          <select
            value={type}
            onChange={(event) => setType(event.target.value as RecipeType)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="dessert">Dessert</option>
          </select>
        </label>

        <div className="edit-recipe-grid">
          <label>
            Servings
            <input
              type="number"
              value={servings}
              onChange={(event) => setServings(Number(event.target.value))}
            />
          </label>

          <label>
            Prep min
            <input
              type="number"
              value={prepTime}
              onChange={(event) => setPrepTime(Number(event.target.value))}
            />
          </label>
        </div>

        <section className="edit-ingredients-section">
          <div className="edit-section-header">
            <h3>Ingredients</h3>

            <button
              type="button"
              className="small-action-button"
              onClick={handleAddIngredient}
            >
              + Add Ingredient
            </button>
          </div>

          <div className="edit-ingredient-list">
            {recipeIngredients.map((recipeIngredient, index) => {
              const ingredient = getIngredientById(recipeIngredient.ingredientId);

              return (
                <div className="edit-ingredient-row" key={index}>
                  <div className="edit-ingredient-name">
                    {ingredient ? ingredient.name : "Unknown Ingredient"}
                  </div>

                  <div className="edit-ingredient-meta">
                    Base unit: {ingredient ? ingredient.baseUnit : "?"}
                  </div>

                  <label className="edit-ingredient-amount">
                    Amount
                    <input
                      type="number"
                      value={recipeIngredient.amount}
                      onChange={(event) =>
                        updateIngredientAmount(index, Number(event.target.value))
                      }
                    />
                  </label>

                  <button
                    type="button"
                    className="remove-ingredient-button"
                    onClick={() => removeIngredient(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <label>
          Instructions
          <textarea
            value={instructionsText}
            onChange={(event) => setInstructionsText(event.target.value)}
            rows={6}
          />
        </label>

        <label>
          Notes
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
          />
        </label>

        <button className="save-recipe-button" type="submit">
          Save Changes
        </button>
      </form>
    </Modal>
  );
}

export default EditRecipeModal;