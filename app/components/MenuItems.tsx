// components/MenuItems.tsx
import Image from 'next/image';
import { bananaType, bananaInfo } from '@/app/types/banana';
import { usePathname } from 'next/navigation';

interface MenuItemsProps {
  isOpen: boolean;
  onbananaSelect: (type: bananaType) => void;
  bananaData: Record<bananaType, bananaInfo>;
}

export function MenuItems({ isOpen, onbananaSelect, bananaData }: MenuItemsProps) {
  const pathname = usePathname();
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
                src={`${pathname}${data.image}`}
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
