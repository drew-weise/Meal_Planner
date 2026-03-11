import type { Meal } from "../types/food";

export const meals: Meal[] = [
  {
    id: 1,
    name: "Chicken and Eggs",
    ingredients: [
      { ingredientId: 1, amount: 200 },
      { ingredientId: 2, amount: 5 },
      { ingredientId: 3, amount: 2 },
    ],
  },
];