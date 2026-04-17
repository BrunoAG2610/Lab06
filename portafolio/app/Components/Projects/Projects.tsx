import React from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';

export default function Projects(){
    return(
        <section className={` section ${styles.projects}`} id="projects">
            <div className={styles.container}> 
                <div className={styles.section__header}>
                    <span className={styles.section__subtitle}>Mi trabajo</span>
                    <h2 className={styles.section__title}>Proyectos Destacados</h2>
                    <p className={styles.section__description}>
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>
                
                <div className={styles.projects__grid}>
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/BrunoAG2610/proyecto-1" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>E-Commerce Platform</h3>
                            <p className={styles.project__description}>
                                Plataforma de comercio electrónico con carrito de compras, 
                                autenticación de usuarios y pasarela de pagos integrada.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>React</span>
                                <span className={styles.tech}>Node.js</span>
                                <span className={styles.tech}>MongoDB</span>
                            </div>
                        </div>
                    </article>
                    
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-chart-line"></i>
                            </div>
                             <div className={styles.project__overlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/BrunoAG2610/proyecto-2" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>Dashboard Analytics</h3>
                            <p className={styles.project__description}>
                                Panel de control interactivo para visualización de datos 
                                con gráficos dinámicos y reportes automatizados.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Django</span>
                                <span className={styles.tech}>Chart.js</span>
                            </div>
                        </div>
                    </article>
                    
                    <article className={styles.project__card}>
                        <div className={styles.project__image}>
                            <div className={styles.project__placeholder}>
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className={styles.project__overlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/BrunoAG2610/proyecto-3" target="_blank" rel="noopener noreferrer" className={styles.project__link}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.project__content}>
                            <h3 className={styles.project__title}>AI Chatbot Assistant</h3>
                            <p className={styles.project__description}>
                                Asistente virtual inteligente con procesamiento de lenguaje 
                                natural y respuestas contextuales.
                            </p>
                            <div className={styles.project__tech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>TensorFlow</span>
                                <span className={styles.tech}>Flask</span>
                            </div>
                        </div>
                    </article>
                </div>
                
                <div className={styles.projects__more}>
                    <Link href="https://github.com/BrunoAG2610" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}