import Image from 'next/image';
import { bananaInfo } from '@/app/types/banana';
import { getImagePath } from '../utils/getImagePath';

interface BananaDishProps {
  type: string;
  data: bananaInfo;
}

export default function BananaDish({ type, data }: BananaDishProps) {
  return (
    <figure className="banana__dish">
      <div className="banana__dish__container">
        <Image 
          src={getImagePath(data.image)}
          alt={`${type} dish`}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mN8//HLfwYiAE0FNxEUAAAYYgkID+UpogAAAABJRU5ErkJggg=="
          sizes="(max-width: 768px) 100vw, 50vw"
          loading={type === 'Cavendish' ? 'eager' : 'lazy'}
          priority={type === 'Cavendish'}
        />
      </div>
    </figure>
  );
}
