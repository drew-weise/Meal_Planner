export type BaseUnit = "g" | "ml" | "unit";

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

export type FoodItemComponent = {
  parentFoodItemId: number;
  childFoodItemId: number;
  amount: number;
};