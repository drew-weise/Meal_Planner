import "./RecipesPage.css";

import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import RecipeEdit from "../../components/RecipeEdit/RecipeEdit";

import type { Recipe } from "../../types/recipes";

import { useState } from "react";

import { recipes } from "../../data/recipeData";


export default function RecipesPage() {

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>(recipes);

  function handleSaveRecipe(updatedRecipe: Recipe) {
    setRecipeList(
      recipeList.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? updatedRecipe
          : recipe
      )
    );

    setSelectedRecipe(updatedRecipe);
    setIsEditing(false);
  }

  if (selectedRecipe && isEditing) {
    return (
      <RecipeEdit
        recipe={selectedRecipe}
        onBack={() => setIsEditing(false)}
        onSave={handleSaveRecipe}
      />
    );
  }

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onBack={setSelectedRecipe}
        onEdit={() => setIsEditing(true)}
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