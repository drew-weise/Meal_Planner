export type BaseUnit = "g" | "ml" | "unit";
export type RecipeType = "breakfast" | "lunch" | "dinner" | "snack" | "dessert";


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