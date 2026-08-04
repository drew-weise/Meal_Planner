import type { Meal } from "../types/food";

export const meals: Meal[] = [
  {
    id: 1,
    name: "Chicken and Rice",
    servings: 1,
    ingredients: [
      {
        foodId: 1,
        quantity: 2,
      },
      {
        foodId: 2,
        quantity: 2,
      },
      {
        foodId: 3,
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
        foodId: 5,
        quantity: 1,
      },
      {
        foodId: 6,
        quantity: 1,
      },
      {
        foodId: 7,
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
        foodId: 4,
        quantity: 3,
      },
    ],
  },
];