export type BaseUnit = "g" | "ml" | "unit";

export type Ingredient = {
  id: number;
  name: string;
  baseUnit: BaseUnit;
  nutritionReferenceAmount: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type MealIngredient = {
  ingredientId: number;
  amount: number;
};

export type Meal = {
  id: number;
  name: string;
  ingredients: MealIngredient[];
};