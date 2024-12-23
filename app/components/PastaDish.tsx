import Image from 'next/image';

interface PastaDishProps {
  type: string;
}

export function PastaDish({ type }: PastaDishProps) {
  return (
    <figure className="pasta__dish">
      <div className="pasta__dish__container">
        <Image 
          src="/image/p.jpeg"
          alt={`${type} dish`}
          width={500}
          height={500}
          priority
        />
      </div>
    </figure>
  );
}
