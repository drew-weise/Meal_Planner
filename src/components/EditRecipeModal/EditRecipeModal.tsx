<section className="edit-ingredients-section">
  <div className="edit-section-header">
    <h3>Ingredients</h3>

    <button
      type="button"
      className="small-action-button"
    >
      + Add Ingredient
    </button>
  </div>

  <div className="edit-ingredient-list">
    {ingredients.map((ingredient, index) => (
      <div
        className="edit-ingredient-row"
        key={index}
      >
        <div className="edit-ingredient-name">
          Ingredient #{ingredient.ingredientId}
        </div>

        <input
          type="number"
          value={ingredient.amount}
          onChange={(event) =>
            updateIngredientAmount(
              index,
              Number(event.target.value)
            )
          }
        />

        <button
          type="button"
          className="remove-ingredient-button"
          onClick={() => removeIngredient(index)}
        >
          Remove Ingredient
        </button>
      </div>
    ))}
  </div>
</section>