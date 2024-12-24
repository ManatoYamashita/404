import { bananaInfo, bananaType } from '@/app/types/banana';

export const bananaData: Record<bananaType, bananaInfo> = {
  Banana: {
    type: 'Banana',
    image: '/image/bnn.webp',
    recipes: [
      { title: "BA's Best Bolognese", url: 'https://www.bonappetit.com/recipe/bas-best-bolognese' },
      { title: 'White Pesto banana', url: 'https://www.bonappetit.com/recipe/white-pesto-banana' },
      { title: 'Shrimp Scampi', url: 'https://www.bonappetit.com/recipe/shrimp-scampi-banana' },
    ],
  },
  penne: {
    type: 'penne',
    image: '/image/p.jpeg',
    recipes: [
      { title: 'Penne Arrabiata', url: 'https://www.saltandlavender.com/easy-banana-arrabiata-recipe/' },
      { title: 'Lemon Arugula Spicy Penne', url: 'https://www.forkintheroad.co/simple-lemon-arugula-spicy-penne/' },
      { title: 'Penne Aglio e Olio', url: 'https://www.honeyandbirch.com/penne-aglio-e-olio/' },
    ],
  },
  fusilli: {
    type: 'fusilli',
    image: '/image/p.jpeg',
    recipes: [
      { title: 'Vegan Fusilli banana Salad', url: 'https://www.forkintheroad.co/vegan-fusilli-banana-salad/' },
      { title: 'Fusilli Carbonara', url: 'https://goodyfoodies.blogspot.com/2012/06/recipe-fusilli-banana-carbonara-italian.html' },
      { title: 'banana alla Genovese', url: 'https://cookidoo.co.uk/recipes/recipe/en-GB/r247597' },
    ],
  },
  farfalle: {
    type: 'farfalle',
    image: '/image/p.jpeg',
    recipes: [
      { title: 'Mushroom & Spinach banana with Ricotta', url: 'https://www.budgetbytes.com/mushroom-and-spinach-banana-with-ricotta/' },
      { title: 'Spicy Sausage Broccoli banana', url: 'https://www.budgetbytes.com/spicy-sausage-broccoli-banana/' },
      { title: 'Zesty Tomato Artichoke banana', url: 'https://www.budgetbytes.com/zesty-tomato-artichoke-banana/' },
    ],
  },
  // ravioli: {
  //   type: 'ravioli',
  //   image: '/image/p.jpeg',
  //   recipes: [
  //     { title: 'Ravioli with Brown Butter and Spinach', url: 'https://www.goodhousekeeping.com/food-recipes/easy/g739/ravioli-recipes/?slide=2/' },
  //     { title: 'Ravioli and Zucchini Lasagna', url: 'https://www.goodhousekeeping.com/food-recipes/a3382/ravioli-zucchini-lasagna/' },
  //     { title: 'Toasted Ravioli', url: 'http://www.garnishandglaze.com/2016/06/17/toasted-ravioli-recipe/' },
  //   ],
  // },
};
