import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import PlannerPage from "./pages/PlannerPage/PlannerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/planner" element={<PlannerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;