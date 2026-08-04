export type Nutrition = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Food = {
  id: number;
  name: string;
  servingAmount: number;
  servingUnit: string;
  nutrition: Nutrition;
};

export type MealIngredient = {
  foodId: number;
  quantity: number;
};

export type Meal = {
  id: number;
  name: string;
  ingredients: MealIngredient[];
  servings: number;
  instructions?: string[];
  notes?: string;
};