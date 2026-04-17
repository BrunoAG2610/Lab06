import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';

let GMData:String = 'brunoaguilar.2610@gmail.com'
let UbiData:String = 'Ciudad de México, México'

export default function Contact(){
    return(
        <section className={` section ${styles.contact}`} id="contact">
            <div className={styles.container}>
                <div className={styles.contact__content}>
                    <div className={styles.contact__info}>
                        <span className={styles.section__subtitle}>¿Tienes un proyecto?</span>
                        <h2 className={styles.section__title}>¡Hablemos!</h2>
                        <p className={styles.contact__description}>
                            Estoy disponible para oportunidades laborales, proyectos freelance 
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>
                        
                        <div className={styles.contact__data}>
                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Email</span>
                                    <Link href="mailto:brunoaguilar.2610@gmail.com" className={styles.contact__value}>{GMData}</Link>
                                </div>
                            </div>
                            
                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Ubicación</span>
                                    <span className={styles.contact__value}>{UbiData}</span>
                                </div>
                            </div>
                            
                            <div className={styles.contact__item}>
                                <div className={styles.contact__icon}>
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <div className={styles.contact__text}>
                                    <span className={styles.contact__label}>Disponibilidad</span>
                                    <span className={`${styles.contact__value} ${styles['contact__value--available']}`}>Disponible para trabajar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.contact__cta}>
                        <div className={styles.contact__card}>
                            <h3 className={styles['contact__card-title']}>¿Listo para comenzar?</h3>
                            <p className={styles['contact__card-text']}>
                                Envíame un mensaje y te responderé lo antes posible.
                            </p>
                            <Link href="mailto:brunoaguilar.2610@gmail.com" className="btn btn--primary btn--large btn--full">
                                <i className="fas fa-paper-plane"></i> Enviar mensaje
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}