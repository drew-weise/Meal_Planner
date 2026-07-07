import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function HomePage() {
  return (
    <main className="home-page">

        <RecipeCard />
        <BottomNav />
    </main>
  );
}