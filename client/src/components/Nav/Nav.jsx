import React from 'react';
import { Link} from 'react-router-dom';
import styles from  './Nav.module.css';
import imgDog from '../../img/logo_dog.png'
import { useSelector } from 'react-redux';

function Nav() {

    const dogsFavorites = useSelector((state) => state.dogsFavorites);
    return ( 
        <div className={styles.fixed}>
        <div className={styles.nav}>
            <div className={styles.nav_left}>
                <picture>
                    <Link to='/home'><img src={imgDog} alt="logo_dog" /></Link>
                </picture>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/dogs/create'>Registrar Raza</Link>
                    <Link to='/'>Salir</Link>
                </nav> 
            </div>
            <div className={styles.nav_right}>
                <Link to='/dogs/favorites'>Favoritos</Link>
                <span className={styles.favorites}>
                    <Link to='/dogs/favorites'>❤</Link>
                </span>
                <span className={styles.count_favorites}>{dogsFavorites.length}</span>
            </div>
        </div>
        </div>
    );
}

export default Nav;