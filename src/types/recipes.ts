export type RecipeIngredient = {
  ingredientId: number;
  quantity: number;
};

export type Recipe = {
  id: number;
  name: string;
  ingredients: RecipeIngredient[];
  servings: number;
  instructions?: string[];
  notes?: string;
};