"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './headMessages.module.scss';
import Btn from '@/app/components/Btn';

export default function HeadMessages() {
    useEffect(() => {
        const initAnimation = async () => {
            const { gsap } = await import('gsap');
            
            const tl = gsap.timeline();
            
            tl.from(`.${styles.title}`, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            })
            .from(`.${styles.para}`, {
                x: 100,
                opacity: 0,
                duration: 0.4
            }, "-=0.5")
            .from(`.${styles.horizontalline}`, {
                scaleX: 0,
                duration: 0.6
            }, "-=0.3")
            .from(`.${styles.paraJa}`, {
                x: 100,
                opacity: 0,
                duration: 0.4
            }, "-=0.3")
            .from(`.${styles.btns}`, {
                y: 50,
                opacity: 0,
                duration: 0.6
            }, "-=0.3");
        };
        
        initAnimation();
    }, []);

   return (
       <header className={styles.messages}>
           <h1 className={styles.title}>404 Page not found</h1>
           <p className={styles.para}>The page you are looking for does not exist. It might have been moved or deleted.Go back to the <Link href="https://manapuraza.com">manapuraza.com</Link>.Or do you want to know more about <strong>bananas</strong>?</p>           <hr className={styles.horizontalline} />
           <p className={styles.paraJa}>お探しのページは存在しません。移動されたか削除された可能性があります。<Link href="https://manapuraza.com">manapuraza.com</Link>に戻ってください。あるいは<strong>バナナ</strong>に詳しくなる??</p>
           <div className={styles.btns}>
               <Btn url="https://manapuraza.com" icon="/image/mnprz-white.webp" />
               <Btn url="https://bento.me/ym" icon="/image/links.svg" label="Links" />
           </div>
       </header>
   );
}
