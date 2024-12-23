// app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PastaType } from '@/app/types/pasta';
import { pastaData } from '@/app/data/pastaData';
import { MenuIcon } from '@/app/components/MenuIcon';
import { MenuItems } from '@/app/components/MenuItems';
import { PastaInfo } from '@/app/components/PastaInfo';
import { PastaDish } from '@/app/components/PastaDish';
import { useGsapAnimations } from '@/app/hooks/useGsapAnimations';

export default function PastaMenu() {
  const [currentPasta, setCurrentPasta] = useState<PastaType>('spaghetti');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { animatePasta, swapContent, toggleMenu } = useGsapAnimations();

  const handlePastaChange = (pastaType: PastaType) => {
    if (pastaType !== currentPasta) {
      setIsMenuOpen(false);
      toggleMenu(false);
      animatePasta(pastaType);
      swapContent(currentPasta, pastaType);
      setCurrentPasta(pastaType);
    } else {
      setIsMenuOpen(false);
      toggleMenu(false);
    }
  };

  const handleToggleMenu = () => {
    const newIsOpen = !isMenuOpen;
    setIsMenuOpen(newIsOpen);
    toggleMenu(newIsOpen);
  };

  return (
    <div className="body-clone" data-pasta={currentPasta}>
      <nav className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <div 
          className="menu__link"
          onClick={handleToggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleToggleMenu()}
        >
          <MenuIcon />
          <span className="menu__open">Menu</span>
        </div>
        <MenuItems 
          isOpen={isMenuOpen}
          onPastaSelect={handlePastaChange}
          pastaData={pastaData}
        />
      </nav>

      <main>
        {Object.entries(pastaData).map(([type, data]) => (
          <div 
            key={type} 
            className={`pasta ${type} ${type === currentPasta ? 'active' : ''}`}
            // style={{ display: type === currentPasta ? 'block' : 'none' }}
          >
            <Image
              className="pasta__background"
              src="/image/p.jpeg"
              alt={type}
              width={500}
              height={500}
              priority
            />
            <PastaInfo type={type} recipes={data.recipes} />
            <PastaDish type={type} />
          </div>
        ))}
      </main>
    </div>
  );
}
