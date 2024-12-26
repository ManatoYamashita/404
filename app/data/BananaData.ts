import { bananaInfo, bananaType } from '@/app/types/banana';

export const bananaData: Record<bananaType, bananaInfo> = {
  Cavendish: {
    type: 'Cavendish',
    image: '/image/bnn.webp',
    introdaction: "日本で最もポピュラーなバナナ。スーパーや果物店で一般に売られている。"
  },
  Morado: {
    type: 'Morado',
    image: '/image/bnn-morado.webp',
    introdaction: "モラドバナナは、モラド種とも呼ばれ、モラド種は、バナナの中でも特に栄養価が高いとされています。"
  },
  Latundan: {
    type: 'Latundan',
    image: '/image/bnn-latundan.webp',
    introdaction: "ラトンダンバナナは、フィリピン原産のバナナで、甘くてクリーミーな味わいが特徴です。"
  },
  Tindok: {
    type: 'Tindok',
    image: '/image/bnn-tindok.webp',
    introdaction: "ティンドクバナナは、フィリピン原産のバナナで、甘くてクリーミーな味わいが特徴です。"
  },
  "Banana": {
    type: 'Banana',
    image: '/image/bnn.webp',
    introdaction: "バナナは、熱帯地域原産の果物で、世界中で親しまれている。"
  },
};
