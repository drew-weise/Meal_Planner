import "./RecipesPage.css";
import BottomNav from "../../components/BottomNav/BottomNav";
import MealCard from "../../components/MealCard/MealCard";
import { meals } from "../../data/mealData";

export default function RecipesPage() {
  return (
    <main className="home-page">
      <section className="meal-grid">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </section>

      <BottomNav />
    </main>
  );
}