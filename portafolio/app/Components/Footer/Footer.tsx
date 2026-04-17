import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

let NombreData:String = 'Bruno Aguilar Buendía'

export default function Footer(){
    return(
        <footer className={styles.footer} id="footer">
        <div className={styles.container}>
            <div className={styles.footer__content}>
                <div className={styles.footer__brand}>
                    <Link href="#" className={styles.footer__logo}>
                        <span className={styles.logo__bracket}>&lt;</span>{NombreData}<span className={styles.logo__bracket}>/&gt;</span>
                    </Link>
                    <p className={styles.footer__text}>
                        Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
                    </p>
                </div>
                
                <div className={styles.footer__social}>
                    <Link href="https://linkedin.com/in/bruno-aguilar-buendía-a429a1387 " target="_blank" rel="noopener noreferrer" className={styles['footer__social-link']} aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://github.com/BrunoAG2610" target="_blank" rel="noopener noreferrer" className={styles['footer__social-link']} aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link href="mailto:brunoaguilar.2610@gmail.com" className={styles['footer__social-link']} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </Link>
                </div>
            </div>
            
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copyright}>
                    &copy; 2026 {NombreData}. Todos los derechos reservados.
                </p>
                <p className={styles.footer__made}>
                    Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
                </p>
            </div>
        </div>
    </footer>
    );
}