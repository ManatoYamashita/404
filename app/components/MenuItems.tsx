// components/MenuItems.tsx
import Image from 'next/image';
import { PastaType, PastaInfo } from '../types/pasta';

interface MenuItemsProps {
  isOpen: boolean;
  onPastaSelect: (type: PastaType) => void;
  pastaData: Record<PastaType, PastaInfo>;
}

export function MenuItems({ isOpen, onPastaSelect, pastaData }: MenuItemsProps) {
  return (
    <div 
      className={`menu__items ${isOpen ? 'active' : ''}`}
    >
      {Object.entries(pastaData).map(([type, data]) => (
        <button
          key={type}
          onClick={() => onPastaSelect(type as PastaType)}
          data-destination={type}
          className="menu__item"
          type="button"
        >
          <div className="menu__item-image">
            <Image 
              src={data.image}
              alt={type}
              width={200}
              height={200}
              priority
            />
          </div>
          <span className="menu__item-text">
            {type}
          </span>
        </button>
      ))}
    </div>
  );
}
