export type bananaType = 'Banana' | 'penne' | 'fusilli' | 'farfalle';

export interface Recipe {
  title: string;
  url: string;
}

export interface bananaInfo {
  type: bananaType;
  image: string;
  recipes: Recipe[];
}
