// components/MenuItems.tsx
import Image from 'next/image';
import { bananaType, bananaInfo } from '@/app/types/banana';
import { getImagePath } from '../utils/getImagePath';

interface MenuItemsProps {
  isOpen: boolean;
  onbananaSelect: (type: bananaType) => void;
  bananaData: Record<bananaType, bananaInfo>;
}

export function MenuItems({ isOpen, onbananaSelect, bananaData }: MenuItemsProps) {
  return (
    <div 
      className={`menu__items ${isOpen ? 'active' : ''}`}
    >
      {Object.entries(bananaData).map(([type, data]) => (
        <button
          key={type}
          onClick={() => onbananaSelect(type as bananaType)}
          data-destination={type}
          className="menu__item"
          type="button"
        >
          <div className="menu__item-image">
            <Image 
              src={getImagePath(data.image)}
              alt={type}
              width={200}
              height={200}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mN8//HLfwYiAE0FNxEUAAAYYgkID+UpogAAAABJRU5ErkJggg=="
              quality={50}
              loading={type === "Cavendish" ? 'eager' : 'lazy'}
              priority={type === "Cavendish"}
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
