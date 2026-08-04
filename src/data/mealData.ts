import type { Meal } from "../types/meal";

export const meals: Meal[] = [
  {
    id: 1,
    name: "Chicken and Rice",
    servings: 1,
    ingredients: [
      {
        ingredientId: 1,
        quantity: 2,
      },
      {
        ingredientId: 2,
        quantity: 2,
      },
      {
        ingredientId: 3,
        quantity: 1,
      },
    ],
  },

  {
    id: 2,
    name: "Greek Yogurt Bowl",
    servings: 1,
    ingredients: [
      {
        ingredientId: 5,
        quantity: 1,
      },
      {
        ingredientId: 6,
        quantity: 1,
      },
      {
        ingredientId: 7,
        quantity: 1.5,
      },
    ],
  },

  {
    id: 3,
    name: "Scrambled Eggs",
    servings: 1,
    ingredients: [
      {
        ingredientId: 4,
        quantity: 3,
      },
    ],
  },
];