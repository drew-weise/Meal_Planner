export type BaseUnit = "g" | "ml" | "unit";
export type RecipeType = "breakfast" | "lunch" | "dinner" | "snack" | "dessert";


export type FoodItemType = "single" | "recipe";

export type FoodItemSource = "seed" | "user" | "api";

export type FoodItem = {
  id: number;
  name: string;
  type: FoodItemType;
  source: FoodItemSource;

  baseUnit: BaseUnit;
  nutritionReferenceAmount: number;

  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;

  brand?: string;
  externalId?: string;
};

export type RecipeIngredient = {
  ingredientId: number;
  amount: number;
};

export type Recipe = {
  id: number;
  name: string;
  type: RecipeType;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: number;
  ingredients: RecipeIngredient[];
  instructions: string[];
  notes?: string;
};