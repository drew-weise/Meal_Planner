import "./IngredientsPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import IngredientCard from "../../components/IngredientCard/IngredientCard";
import { ingredients } from "../../data/ingredients";
import { useState } from "react";

function IngredientsPage() {

  const [searchTerm, setSearchTerm] = useState("");
  
  function handleAddIngredient() {
    
    alert("Add Ingredient functionality to be implemented soon...");
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
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              ingredient={ingredient}
            />
          ))}
        </section>

      </main>

      <BottomNav />
    </>
  );
}

export default IngredientsPage;