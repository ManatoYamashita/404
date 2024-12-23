export type PastaType = 'spaghetti' | 'penne' | 'fusilli' | 'farfalle' | 'ravioli';

export interface Recipe {
  title: string;
  url: string;
}

export interface PastaInfo {
  type: PastaType;
  recipes: Recipe[];
  image: string;
}
