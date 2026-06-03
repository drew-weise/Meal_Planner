import { useState } from "react";
import type { FoodItem } from "../../types/food";
import "./FoodItemCard.css";

type Props = {
  foodItem: FoodItem;
};

function IngredientCard(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <article className="ingredient-card">
      <button className="ingredient-card-header" onClick={handleToggle}>
        <span className="ingredient-name">{props.foodItem.name}</span>

        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="ingredient-details">
          <p>Calories: {props.foodItem.calories}</p>
          <p>Protein: {props.foodItem.protein}g</p>
          <p>Carbs: {props.foodItem.carbs}g</p>
          <p>Fat: {props.foodItem.fat}g</p>

          <button className="edit-button">Edit</button>
        </div>
      )}
    </article>
  );
}

export default IngredientCard;