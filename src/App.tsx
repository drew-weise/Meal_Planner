import BackendHealthCheck from "./components/BackendHealthCheck";
import IngredientList from "./components/IngredientList";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <BackendHealthCheck />
      <h1>Meal Prep App</h1>
      <IngredientList />
    </div>
  );
}