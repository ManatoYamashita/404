import React from 'react';
import styles from './btn.module.scss';
import Link from 'next/link';

interface BtnProps {
  label: string;
  url: string;
}

export default function Btn({ label, url }: BtnProps) {
  return (
    <>
        <button type='button' className={styles.btn}>
            <Link href={url} aria-label={label}>
                {label}
            </Link>
        </button>
    </>
  );
}

