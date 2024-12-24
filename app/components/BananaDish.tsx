import Image from 'next/image';

interface BananaDishProps {
  type: string;
}

export default function BananaDish({ type }: BananaDishProps) {
  return (
    <figure className="banana__dish">
      <div className="banana__dish__container">
        <Image 
          src="/image/bnn.webp"
          alt={`${type} dish`}
          width={500}
          height={500}
          priority
        />
      </div>
    </figure>
  );
}
