// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { bananaType } from '@/app/types/banana';
import { bananaData } from '@/app/data/BananaData';
import { MenuIcon } from '@/app/components/MenuIcon';
import { MenuItems } from '@/app/components/MenuItems';
import BananaInfo from '@/app/components/BananaInfo';
import BananaDish from '@/app/components/BananaDish';
import { useGsapAnimations } from '@/app/hooks/useGsapAnimations';

export default function BananaMenu() {
  const [currentbanana, setCurrentbanana] = useState<bananaType>('Cavendish');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { animatebanana, swapContent, toggleMenu } = useGsapAnimations();

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
    return null; // または適切なローディング表示
  }

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
            style={{ 
              display: type === currentbanana ? 'flex' : 'none',
              flexDirection: 'column',
              opacity: type === currentbanana ? 1 : 0
            }}
          >
            <Image
              className="banana__background"
              src={data.image}
              alt={type}
              width={500}
              height={500}
              priority
            />
            <BananaInfo type={type as bananaType} introdaction={data.introdaction} />
            <BananaDish type={type as bananaType} />
          </div>
        ))}
      </main>
    </div>
  );
}
