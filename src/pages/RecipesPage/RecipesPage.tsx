import "./RecipesPage.css";

import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";

import type { Recipe } from "../../types/recipes";

import { useState } from "react";
import { recipes } from "../../data/recipeData";

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [recipeList, setRecipeList] = useState<Recipe[]>(recipes);

  function handleUpdateRecipe(updatedRecipe: Recipe) {
    setRecipeList((currentRecipes) =>
      currentRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? updatedRecipe
          : recipe
      )
    );

    setSelectedRecipe(updatedRecipe);
  }

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onBack={setSelectedRecipe}
        onUpdateRecipe={handleUpdateRecipe}
      />
    );
  }


  return (
    <main className="recipe-page">
      <section className="recipe-grid">
        {recipeList.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={setSelectedRecipe}
          />
        ))}
      </section>

      <BottomNav />
    </main>
  );
}