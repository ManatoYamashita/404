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
          priority
        />
      </div>
    </figure>
  );
}
