export type RecipeType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "dessert";

export type Ingredient = {
  id: number;
  amount: string;
};

export type Recipe = {
  id: number;
  name: string;
  type: RecipeType;
  servings: number;
  prepTime?: number;

  ingredients: Ingredient[];
  instructions: string[];
  notes?: string;
};