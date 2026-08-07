import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { recipes } from "../../data/recipeData";

export default function RecipesPage() {
  return (
    <main className="home-page">
      <section className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>

      <BottomNav />
    </main>
  );
}