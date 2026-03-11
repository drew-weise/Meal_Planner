import { ingredients } from "../data/ingredients";

export default function IngredientList() {
  return (
    <section>
      <h2>Ingredients</h2>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h3>{ingredient.name}</h3>
          <p>Base unit: {ingredient.baseUnit}</p>
        </div>
      ))}
    </section>
  );
}