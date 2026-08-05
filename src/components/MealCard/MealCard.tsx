// MealCard.tsx
import "./MealCard.css";
import type { Nutrition } from "../../types/nutrition";
import type { Meal } from "../../types/meal";
import { foods } from "../../data/foodData";

type MealCardProps = {
  meal: Meal;
};

// function calculateMealNutrition(meal: Meal): Nutrition {
//   return meal.ingredients.reduce<Nutrition>(
//     (total, mealIngredient) => {
//       const food = foods.find(
//         (food) => food.id === mealIngredient.ingredientId
//       );

//       if (!food) {
//         return total;
//       }

//       return {
//         calories:
//           total.calories +
//           food.nutrition.calories * mealIngredient.quantity,
//         protein:
//           total.protein +
//           food.nutrition.protein * mealIngredient.quantity,
//         carbs:
//           total.carbs +
//           food.nutrition.carbs * mealIngredient.quantity,
//         fat:
//           total.fat +
//           food.nutrition.fat * mealIngredient.quantity,
//       };
//     },
//     {
//       calories: 0,
//       protein: 0,
//       carbs: 0,
//       fat: 0,
//     }
//   );
// }

function calculateMealNutrition(meal: Meal): Nutrition {
  const total: Nutrition = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  };

  for (const mealIngredient of meal.ingredients) {
    const matchingFood = foods.find(
      (food) => food.id === mealIngredient.ingredientId
    );

    if (!matchingFood) {
      continue;
    }

    total.calories +=
      matchingFood.nutrition.calories * mealIngredient.quantity;

    total.protein +=
      matchingFood.nutrition.protein * mealIngredient.quantity;

    total.carbs +=
      matchingFood.nutrition.carbs * mealIngredient.quantity;

    total.fat +=
      matchingFood.nutrition.fat * mealIngredient.quantity;
  }

  return total;
}

export default function MealCard(props: MealCardProps) {
  const meal = props.meal;
  const nutrition = calculateMealNutrition(meal);

  return (
    <article className="meal-card">
      <header className="meal-card__header">
        <h2>{meal.name}</h2>
      </header>

      <div className="meal-card__image">
        <span>Meal image</span>
      </div>

      <div className="meal-card__content">
        <div className="meal-card__nutrition">
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

        <div className="meal-card__actions">
          <button
            type="button"
            className="meal-card__details-button">
            Details
          </button>

          <button
            type="button"
            className="meal-card__add-button">
            Add to plan
          </button>
        </div>
      </div>
    </article>
  );
}