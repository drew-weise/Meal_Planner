import { useState } from "react";
import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import { recipes } from "../../data/recipes";

function RecipesPage() {
  const [searchText, setSearchText] = useState("");
  const [showPhotos, setShowPhotos] = useState(false);
  const [expandedRecipeId, setExpandedRecipeId] = useState<number | null>(null);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

  function handleAddRecipe() {
    alert("Add recipe coming soon...");
  }

  function handleEditRecipe(recipeName: string) {
    alert(`Edit ${recipeName} coming soon...`);
  }

  function toggleRecipeDetails(recipeId: number) {
    if (expandedRecipeId === recipeId) {
      setExpandedRecipeId(null);
    } else {
      setExpandedRecipeId(recipeId);
    }
  }

  return (
    <>
      <main className="recipes-page">
        <section className="recipes-header">
          <h1>Recipes</h1>

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

            <label className="photo-toggle">
              <input
                type="checkbox"
                checked={showPhotos}
                onChange={() => setShowPhotos(!showPhotos)}
              />
              Show photos
            </label>
          </div>
        </section>

        <section className="recipe-list">
          {filteredRecipes.map((recipe) => {
            const isExpanded = expandedRecipeId === recipe.id;

            return (
              <article className="recipe-card" key={recipe.id}>
                {showPhotos && <div className="recipe-image-placeholder" />}

                <div className="recipe-card-content">
                  <div className="recipe-card-top">
                    <div>
                      <h2>{recipe.name}</h2>
                      <p className="recipe-meta">
                        {recipe.servings} serving{recipe.servings > 1 ? "s" : ""} •{" "}
                        {recipe.prepTime} min
                      </p>
                    </div>

                    <span className="recipe-type">{recipe.type}</span>
                  </div>

                  <div className="recipe-macros">
                    <span>{recipe.calories} cal</span>
                    <span>{recipe.protein}g protein</span>
                    <span>{recipe.carbs}g carbs</span>
                    <span>{recipe.fat}g fat</span>
                  </div>

                  <button
                    className="details-button"
                    onClick={() => toggleRecipeDetails(recipe.id)}
                  >
                    {isExpanded ? "Hide details" : "View details"}
                  </button>

                  {isExpanded && (
                    <div className="recipe-details">
                      <section>
                        <h3>Ingredients</h3>
                        <p>{recipe.ingredients.length} ingredients</p>
                      </section>

                      <section>
                        <h3>Instructions</h3>
                        <ol>
                          {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </section>

                      {recipe.notes && (
                        <section>
                          <h3>Notes</h3>
                          <p>{recipe.notes}</p>
                        </section>
                      )}

                      <button
                        className="edit-recipe-button"
                        onClick={() => handleEditRecipe(recipe.name)}
                      >
                        Edit Recipe
                      </button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <BottomNav />
    </>
  );
}

export default RecipesPage;