import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import IngredientsPage from "./pages/IngredientsPage/IngredientsPage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import GroceryPage from "./pages/GroceryPage/GroceryPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/grocery" element={<GroceryPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;