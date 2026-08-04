import type { Ingredient } from "../types/meal";

export const foods: Ingredient[] = [
  {
    id: 1,
    name: "Chicken Breast",
    servingAmount: 100,
    servingUnit: "g",
    nutrition: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
    },
  },
  {
    id: 2,
    name: "Cooked Basmati Rice",
    servingAmount: 100,
    servingUnit: "g",
    nutrition: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
    },
  },
  {
    id: 3,
    name: "Broccoli",
    servingAmount: 100,
    servingUnit: "g",
    nutrition: {
      calories: 34,
      protein: 2.8,
      carbs: 7,
      fat: 0.4,
    },
  },
  {
    id: 4,
    name: "Egg",
    servingAmount: 1,
    servingUnit: "egg",
    nutrition: {
      calories: 72,
      protein: 6,
      carbs: 0.4,
      fat: 5,
    },
  },
  {
    id: 5,
    name: "Greek Yogurt",
    servingAmount: 170,
    servingUnit: "g",
    nutrition: {
      calories: 100,
      protein: 17,
      carbs: 6,
      fat: 0,
    },
  },
  {
    id: 6,
    name: "Honey",
    servingAmount: 21,
    servingUnit: "g",
    nutrition: {
      calories: 64,
      protein: 0,
      carbs: 17,
      fat: 0,
    },
  },
  {
    id: 7,
    name: "Strawberries",
    servingAmount: 100,
    servingUnit: "g",
    nutrition: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
    },
  },
];