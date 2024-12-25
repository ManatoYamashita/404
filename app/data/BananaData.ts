import { bananaInfo, bananaType } from '@/app/types/banana';

export const bananaData: Record<bananaType, bananaInfo> = {
  Cavendish: {
    type: 'Cavendish',
    image: '/image/bnn.webp',
    // recipes: [
    //   { title: "BA's Best Bolognese", url: 'https://www.bonappetit.com/recipe/bas-best-bolognese' },
    //   { title: 'White Pesto banana', url: 'https://www.bonappetit.com/recipe/white-pesto-banana' },
    //   { title: 'Shrimp Scampi', url: 'https://www.bonappetit.com/recipe/shrimp-scampi-banana' },
    // ],
    introdaction: "日本で最もポピュラーなバナナ。スーパーや果物店で一般に売られている。"
  },
  Morado: {
    type: 'Morado',
    image: '/image/bnn-morado.webp',
    // recipes: [
    //   { title: 'Penne Arrabiata', url: 'https://www.saltandlavender.com/easy-banana-arrabiata-recipe/' },
    //   { title: 'Lemon Arugula Spicy Penne', url: 'https://www.forkintheroad.co/simple-lemon-arugula-spicy-penne/' },
    //   { title: 'Penne Aglio e Olio', url: 'https://www.honeyandbirch.com/penne-aglio-e-olio/' },
    // ],
    introdaction: "モラドバナナは、モラド種とも呼ばれ、モラド種は、バナナの中でも特に栄養価が高いとされています。"
  },
  Latundan: {
    type: 'Latundan',
    image: '/image/bnn-latundan.webp',
    // recipes: [
    //   { title: 'Vegan Fusilli banana Salad', url: 'https://www.forkintheroad.co/vegan-fusilli-banana-salad/' },
    //   { title: 'Fusilli Carbonara', url: 'https://goodyfoodies.blogspot.com/2012/06/recipe-fusilli-banana-carbonara-italian.html' },
    //   { title: 'banana alla Genovese', url: 'https://cookidoo.co.uk/recipes/recipe/en-GB/r247597' },
    // ],
    introdaction: "ラトンダンバナナは、フィリピン原産のバナナで、甘くてクリーミーな味わいが特徴です。"
  },
  Tindok: {
    type: 'Tindok',
    image: '/image/bnn-tindok.webp',
    // recipes: [
    //   { title: 'Mushroom & Spinach banana with Ricotta', url: 'https://www.budgetbytes.com/mushroom-and-spinach-banana-with-ricotta/' },
    //   { title: 'Spicy Sausage Broccoli banana', url: 'https://www.budgetbytes.com/spicy-sausage-broccoli-banana/' },
    //   { title: 'Zesty Tomato Artichoke banana', url: 'https://www.budgetbytes.com/zesty-tomato-artichoke-banana/' },
    // ],
    introdaction: "ティンドクバナナは、フィリピン原産のバナナで、甘くてクリーミーな味わいが特徴です。"
  },
  "Banana": {
    type: 'Banana',
    image: '/image/bnn.webp',
    // recipes: [
    //   { title: 'Mushroom & Spinach banana with Ricotta', url: 'https://www.budgetbytes.com/mushroom-and-spinach-banana-with-ricotta/' },
    //   { title: 'Spicy Sausage Broccoli banana', url: 'https://www.budgetbytes.com/spicy-sausage-broccoli-banana/' },
    //   { title: 'Zesty Tomato Artichoke banana', url: 'https://www.budgetbytes.com/zesty-tomato-artichoke-banana/' },
    // ],
    introdaction: "バナナは、熱帯地域原産の果物で、世界中で親しまれている。"
  },
};
