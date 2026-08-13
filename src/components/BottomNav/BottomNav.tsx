import { NavLink } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/planner">Planner</NavLink>
    </nav>
  );
}