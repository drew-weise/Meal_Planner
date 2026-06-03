import "./IngredientsPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import IngredientCard from "../../components/IngredientCard/FoodItemCard";
import { useState, useEffect } from "react";
import AddIngredient from "../../components/AddFoodItem/AddFoodItem";
import type { FoodItem } from "../../types/food";

function IngredientsPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddIngredient, setShowAddIngredient] = useState(false);
  const [ingredientList, setIngredientList] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:5174/api/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredientList(data))
      .catch((error) => console.error(error));
  }, []);
  
  function handleAddIngredient() {
    setShowAddIngredient(true);
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Search functionality to be implemented soon...");
    console.log("Searching for:", searchTerm);

  }

  return (
    <>
      <main className="ingredients-page">

        <section className="ingredients-header">
          <h1>Ingredients</h1>

          <div className="ingredients-controls">

            <form className="search-container" onSubmit={handleSearch}>
              <input
                className="ingredient-search"
                type="text"
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                type="submit"
                className="search-button"
              >
                Search
              </button>
            </form>

            <button className="add-ingredient-button" onClick={handleAddIngredient}>
              + Add Ingredient
            </button>

          </div>
        </section>

        <section className="ingredients-list">
          {ingredientList.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              foodItem={ingredient}
            />
          ))}
        </section>

      </main>
      
      {showAddIngredient && (<AddIngredient onClose={() => setShowAddIngredient(false)} />)}

      <BottomNav />
    </>
  );
}

export default IngredientsPage;