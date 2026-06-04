import { useState } from "react";
import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes } from "../../data/recipes";
import type { RecipeType } from "../../types/food";

type RecipeFilter = "all" | RecipeType;

function RecipesPage() {
  const [searchText, setSearchText] = useState("");
  const [showPhotos, setShowPhotos] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<RecipeFilter>("all");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesFilter =
      selectedFilter === "all" || recipe.type === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  function handleAddRecipe() {
    alert("Add recipe coming soon...");
  }

  function handleFilterClick(filter: RecipeFilter) {
    setSelectedFilter(filter);
    setShowFilters(false);
  }

  return (
    <>
      <main className="recipes-page">
        <section className="recipes-header">
          <input
            className="recipe-search"
            type="text"
            placeholder="Search recipes..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <div className="recipe-controls">
            <button className="add-recipe-button" onClick={handleAddRecipe}>
              + Add Recipe
            </button>

            <button
              className="filter-button"
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
            </button>
          </div>
        </section>

        {showFilters && (
          <section className="filter-dropdown">
            <label className="photo-toggle">
              <input
                type="checkbox"
                checked={showPhotos}
                onChange={() => setShowPhotos(!showPhotos)}
              />
              Show photos
            </label>

            <div className="filter-options">
              <button
                className={selectedFilter === "all" ? "active-filter" : ""}
                onClick={() => handleFilterClick("all")}
              >
                All
              </button>

              <button
                className={selectedFilter === "breakfast" ? "active-filter" : ""}
                onClick={() => handleFilterClick("breakfast")}
              >
                Breakfast
              </button>

              <button
                className={selectedFilter === "lunch" ? "active-filter" : ""}
                onClick={() => handleFilterClick("lunch")}
              >
                Lunch
              </button>

              <button
                className={selectedFilter === "dinner" ? "active-filter" : ""}
                onClick={() => handleFilterClick("dinner")}
              >
                Dinner
              </button>

              <button
                className={selectedFilter === "snack" ? "active-filter" : ""}
                onClick={() => handleFilterClick("snack")}
              >
                Snack
              </button>

              <button
                className={selectedFilter === "dessert" ? "active-filter" : ""}
                onClick={() => handleFilterClick("dessert")}
              >
                Dessert
              </button>
            </div>
          </section>
        )}

        <section className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              showPhotos={showPhotos}
            />
          ))}
        </section>
      </main>

      <BottomNav />
    </>
  );
}

export default RecipesPage;