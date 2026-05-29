import { useState } from "react";
import type { Ingredient } from "../../types/food";
import "./IngredientCard.css";

type Props = {
  ingredient: Ingredient;
};

function IngredientCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <article className="ingredient-card">
      <button className="ingredient-card-header" onClick={handleToggle}>
        <span className="ingredient-name">{props.ingredient.name}</span>

        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="ingredient-details">
          <p>Calories: {props.ingredient.calories}</p>
          <p>Protein: {props.ingredient.protein}g</p>
          <p>Carbs: {props.ingredient.carbs}g</p>
          <p>Fat: {props.ingredient.fat}g</p>

          <button className="edit-button">Edit</button>
        </div>
      )}
    </article>
  );
}

export default IngredientCard;