import type { Recipe } from "../types/food";

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Chicken Tikka Masala",
    type: "dinner",
    servings: 2,
    prepTime: 30,
    ingredients: [
      { name: "Chicken Breast", amount: "300 g" },
      { name: "Cooked Rice", amount: "250 g" },
      { name: "Tikka Masala Sauce", amount: "1 cup" },
    ],
    instructions: [
      "Cook the rice according to package directions.",
      "Heat the chicken with tikka masala sauce in a pan.",
      "Serve the chicken mixture over rice.",
    ],
    notes: "Easy version using premade sauce and cooked chicken.",
  },

  {
    id: 2,
    name: "Sweet Potato Black Bean Tacos",
    type: "dinner",
    servings: 2,
    prepTime: 25,
    ingredients: [
      { name: "Sweet Potato", amount: "250 g" },
      { name: "Black Beans", amount: "150 g" },
      { name: "Corn Tortillas", amount: "3" },
    ],
    instructions: [
      "Roast or sauté the sweet potato until tender.",
      "Warm the black beans.",
      "Fill tortillas with sweet potato and black beans.",
    ],
    notes: "Good with avocado, hot sauce, or Greek yogurt.",
  },

  {
    id: 3,
    name: "Breakfast Burrito",
    type: "breakfast",
    servings: 1,
    prepTime: 15,
    ingredients: [
      { name: "Eggs", amount: "3" },
      { name: "Large Tortilla", amount: "1" },
    ],
    instructions: [
      "Scramble the eggs.",
      "Warm the tortilla.",
      "Add eggs to tortilla and roll into a burrito.",
    ],
    notes: "Add potatoes, cheese, salsa, or hot sauce if desired.",
  },

  {
    id: 4,
    name: "Ground Turkey Taco Bowl",
    type: "lunch",
    servings: 2,
    prepTime: 20,
    ingredients: [
      { name: "Ground Turkey", amount: "250 g" },
      { name: "Cooked Rice", amount: "200 g" },
      { name: "Black Beans", amount: "100 g" },
      { name: "Taco Seasoning", amount: "1 packet" },
    ],
    instructions: [
      "Cook the ground turkey in a skillet.",
      "Season the turkey with taco seasoning.",
      "Serve over rice with black beans.",
    ],
    notes: "Simple high-protein meal prep bowl.",
  },

  {
    id: 5,
    name: "Greek Yogurt Protein Bowl",
    type: "snack",
    servings: 1,
    prepTime: 5,
    ingredients: [
      { name: "Plain Greek Yogurt", amount: "300 g" },
      { name: "Vanilla Protein Powder", amount: "30 g" },
    ],
    instructions: [
      "Add Greek yogurt to a bowl.",
      "Mix in protein powder until smooth.",
      "Add toppings if desired.",
    ],
    notes: "Good with banana, granola, honey, or cinnamon.",
  },

  {
    id: 6,
    name: "Avocado Toast",
    type: "breakfast",
    servings: 1,
    prepTime: 10,
    ingredients: [
      { name: "Bread", amount: "2 slices" },
      { name: "Avocado", amount: "100 g" },
      { name: "Eggs", amount: "2" },
    ],
    instructions: [
      "Toast the bread.",
      "Mash the avocado and spread it over the toast.",
      "Cook eggs to preference and place them on top.",
    ],
    notes: "Season with salt, pepper, and chili flakes if desired.",
  },
];