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
    <div className="ingredient-card">
      <button onClick={handleToggle}>
        {props.ingredient.name}
      </button>

      {isOpen && (
        <div className="ingredient-details">
          <p>Calories: {props.ingredient.calories}</p>
          <p>Protein: {props.ingredient.protein}g</p>
          <p>Carbs: {props.ingredient.carbs}g</p>
          <p>Fat: {props.ingredient.fat}g</p>
        </div>
      )}
    </div>
  );
}

export default IngredientCard;