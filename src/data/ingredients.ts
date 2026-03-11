import type { Ingredient } from "../types/food";

export const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Chicken Breast",
    baseUnit: "g",
    nutritionReferenceAmount: 100,
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
  },
  {
    id: 2,
    name: "Olive Oil",
    baseUnit: "ml",
    nutritionReferenceAmount: 15,
    calories: 119,
    protein: 0,
    carbs: 0,
    fat: 13.5,
  },
  {
    id: 3,
    name: "Egg",
    baseUnit: "unit",
    nutritionReferenceAmount: 1,
    calories: 70,
    protein: 6,
    carbs: 0.5,
    fat: 5,
  },
];