import React from 'react';
import styles from  './PageNotFound.module.css';
import img404 from '../../img/404.png'
import imgDog from '../../img/logo_dog.png'
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div>
            <div className={styles.header}>
                <picture>
                    <img src={imgDog} alt="logo_dog" />
                </picture>
                <Link to='/home'><button className={styles.header_btn}>EMPEZAR</button></Link>
            </div>
            <div className={styles.pageNotFound}>
                <img src={img404} alt="img404" className={styles.img404}/>
                <h2>No pudimos encontrar esta página</h2>
                <p>Probá volviendo atrás e intentá de nuevo.</p>
                <Link to='/'><button className={styles.banner_btn}>Volver al inicio</button></Link>
            </div>
        </div>
    );
}

export default PageNotFound;