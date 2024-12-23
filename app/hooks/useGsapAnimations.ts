// hooks/useGsapAnimations.ts
import { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { PastaType } from '../types/pasta';

export function useGsapAnimations() {
  useEffect(() => {
    // 初期状態の設定
    gsap.set('.menu__items', {
      yPercent: -100,
      opacity: 0,
      visibility: 'hidden',
      zIndex: -1
    });

    // メニューアイテムを個別に設定
    gsap.set('.menu__item', {
      yPercent: 50,
      opacity: 0,
      rotateX: -45
    });

    // 最初のパスタを表示
    gsap.set('.pasta.spaghetti', {
      display: 'block',
      opacity: 1
    });
    
    // 他のパスタを非表示
    gsap.set('.pasta:not(.spaghetti)', {
      display: 'none',
      opacity: 0
    });
  }, []);

  const animatePasta = useCallback((pastaType: PastaType) => {
    const timeline = gsap.timeline();
    const svgPaths = document.querySelectorAll('.main-1, .main-2, .main-3');
    
    timeline
      .to(svgPaths, {
        duration: 0.4,
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        onComplete: () => {
          svgPaths.forEach((path, index) => {
            const targetPath = document.querySelector(`#${pastaType}-${index + 1}`);
            if (targetPath) {
              path.setAttribute('d', targetPath.getAttribute('d') || '');
            }
          });
        }
      })
      .to(svgPaths, {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: 'power3.inOut'
      });

    return timeline;
  }, []);

  const swapContent = useCallback((currentType: PastaType, nextType: PastaType) => {
    const timeline = gsap.timeline();
    const currentElement = document.querySelector(`.pasta.${currentType}`);
    const nextElement = document.querySelector(`.pasta.${nextType}`);
    const background = document.querySelector('.pasta__background');
    
    if (!currentElement || !nextElement) return timeline;

    timeline
      .set(nextElement, { display: 'block', opacity: 0, xPercent: 100 })
      .to(currentElement, {
        xPercent: -100,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      })
      .to(background, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.in'
      }, '<')
      .set(currentElement, { display: 'none' })
      .to(nextElement, {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
      .to(background, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      }, '<');

    return timeline;
  }, []);

  const toggleMenu = useCallback((isOpen: boolean) => {
    const timeline = gsap.timeline();

    if (isOpen) {
      timeline
        .set('.menu__items', {
          visibility: 'visible',
          zIndex: 10
        })
        .to('.menu__items', {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out'
        })
        .to('.menu__item', {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out'
        }, '-=0.3');
    } else {
      timeline
        .to('.menu__item', {
          yPercent: 50,
          opacity: 0,
          rotateX: -45,
          duration: 0.3,
          stagger: 0.05,
          ease: 'power3.in'
        })
        .to('.menu__items', {
          yPercent: -100,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.in'
        }, '-=0.2')
        .set('.menu__items', {
          visibility: 'hidden',
          zIndex: -1
        });
    }

    return timeline;
  }, []);

  return {
    animatePasta,
    swapContent,
    toggleMenu
  };
}
