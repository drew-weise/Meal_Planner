import "./IngredientsPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import { ingredients } from "../../data/ingredients";

function IngredientsPage() {
  return (
    <>
      <main className="ingredients-page">
        <h1>Ingredients</h1>

        <div className="ingredients-list">
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              ingredient={ingredient}
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </>
  );
}

export default IngredientsPage;