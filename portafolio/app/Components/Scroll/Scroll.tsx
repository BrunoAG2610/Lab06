import React from 'react';
import styles from './Scroll.module.css';
import Link from 'next/link';

export default function Scroll(){
    return(
        <Link href="#home" className={styles['scroll-top']} id="scroll-top">
        <i class="fas fa-arrow-up"></i>
    </Link>
    );
}