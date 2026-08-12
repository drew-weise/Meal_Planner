import type { Recipe } from "../types/recipes";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Chicken and Rice",
    servings: 1,
    recipeIngredients: [
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
    instructions: [
      "Wash the rice.",
      "Cook the rice in water for 30 minutes.",
      "Slice the chicken into strips.",
      "Heat oil in a pan.",
      "Brown the chicken on one side.",
      "Flip the chicken and cook through."
    ],
  },

  {
    id: 2,
    name: "Greek Yogurt Bowl",
    servings: 1,
    recipeIngredients: [
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
    recipeIngredients: [
      {
        ingredientId: 4,
        quantity: 3,
      },
    ],
  },
];