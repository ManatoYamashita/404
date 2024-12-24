// app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { bananaType } from '@/app/types/banana';
import { bananaData } from '@/app/data/BananaData';
import { MenuIcon } from '@/app/components/MenuIcon';
import { MenuItems } from '@/app/components/MenuItems';
import BananaInfo from '@/app/components/BananaInfo';
import BananaDish from '@/app/components/BananaDish';
import { useGsapAnimations } from '@/app/hooks/useGsapAnimations';

export default function BananaMenu() {
  const [currentbanana, setCurrentbanana] = useState<bananaType>('Banana');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { animatebanana, swapContent, toggleMenu } = useGsapAnimations();

  const handlebananaChange = (bananaType: bananaType) => {
    if (bananaType !== currentbanana) {
      setIsMenuOpen(false);
      toggleMenu(false);
      animatebanana(bananaType);
      swapContent(currentbanana, bananaType);
      setCurrentbanana(bananaType);
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
    <div className="body-clone" data-banana={currentbanana}>
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
          onbananaSelect={handlebananaChange}
          bananaData={bananaData}
        />
      </nav>

      <main>
        {Object.entries(bananaData).map(([type, data]) => (
          <div 
            key={type} 
            className={`banana ${type} ${type === currentbanana ? 'active' : ''}`}
            style={{ display: type === currentbanana ? 'block' : 'none' }}
          >
            <Image
              className="banana__background"
              src="/image/bnn.webp"
              alt={type}
              width={500}
              height={500}
              priority
            />
            <BananaInfo type={type} recipes={data.recipes} />
            <BananaDish type={type} />
          </div>
        ))}
      </main>
    </div>
  );
}
