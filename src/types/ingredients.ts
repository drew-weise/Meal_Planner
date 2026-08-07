import type { Nutrition } from "./nutrition";


export type Ingredient = {
  id: number;
  name: string;
  servingAmount: number;
  servingUnit: string;
  nutrition: Nutrition;
};