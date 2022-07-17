import React from 'react';
import { Link } from 'react-router-dom';
import styles from  './LandingPage.module.css';
import create_dog from '../../img/create_dog.png';
import favorite_dog from '../../img/favorite_dog.png'; 
import filter_dog from '../../img/filter_dog.png';
import imgDog from '../../img/logo_dog.png'

function LandingPage() {
    return (
        <div>
            <div className={styles.header}>
                <picture>
                    <img src={imgDog} alt="logo_dog" />
                </picture>
                <div>
                    <a href="https://www.linkedin.com/in/cristhian-fernandez-cumbia/" target='_blank' rel='noreferrer'>
                        <span className={styles.linkedin}><i class="fa-brands fa-linkedin"></i></span>
                    </a>
                    <Link to='/home'><button className={styles.header_btn}>EMPEZAR</button></Link>
                </div> 
            </div>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <h1 className={styles.banner_tittle}>Explora razas magníficas de perros</h1>
                    <p className={styles.banner_description}>Obtén información de más de 250 razas de perros y descubre cuáles son tus favoritas.</p>
                    <Link to='/home'><button className={styles.banner_btn}>INGRESAR</button></Link>
                </div>
            </div>
            <div className={styles.contents}>
                <h2>¿Que podrás hacer?</h2>
                <div className={styles.contents_items}>
                    <div className={styles.contents_item}>
                        <img src={filter_dog} alt="filtrar_dog" />
                        <p>Filtrar Información</p>
                    </div>
                    <div className={styles.contents_item}>
                        <img src={create_dog} alt="create_dog" />
                        <p>Crear tu propia raza</p>
                    </div>
                    <div className={styles.contents_item}>
                        <img src={favorite_dog} alt="favorite_dog" />
                        <p>Elegir tus favoritas</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;