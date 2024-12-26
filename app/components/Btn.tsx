import React from 'react';
import styles from './btn.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/getImagePath';

interface BtnProps {
    label?: string;
    icon?: string;
    url: string;
}

export default function Btn({ label, url, icon }: BtnProps) {

    return (
        <Link 
            href={url} 
            className={styles.btn}
            aria-label={label}
        >
        {icon && (
            <Image 
                src={getImagePath(icon)}
                alt="button icon"
                width={100} 
                height={100}
                className={styles.icon}
            />
        )}
        <span className={styles.label}>{label}</span>
        </Link>
    );
}
