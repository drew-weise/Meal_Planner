import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import type { Recipe } from "../../types/recipes";
import { recipes } from "../../data/recipeData";
import { useState } from "react";

export default function RecipesPage() {

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  if (selectedRecipe) {
    return (
      <RecipeDetails 
        recipe={selectedRecipe}
        onBack={setSelectedRecipe} 
      />
    );
  }

  return (
    <main className="recipe-page">
      <section className="recipe-grid">
        {recipes.map((recipe) => (
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