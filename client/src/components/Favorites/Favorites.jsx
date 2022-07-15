import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Dogs from '../Dogs/Dogs';
import Pagination from '../Pagination/Pagination';
import styles from  './Favorites.module.css';

function Favorites() {

    const dogsFavorites = useSelector((state) => state.dogsFavorites);
    const [page, setPage] = useState(1);
    const byPage = 8;
    
    let countPage = Math.ceil(dogsFavorites.length / byPage);

    let dogByPageMin = (page - 1)*byPage;
    let dogByPageMax = (page - 1)*byPage + byPage;
    const dogsByPage = dogsFavorites.slice(dogByPageMin,dogByPageMax);

    return (
        <div className={styles.home}>
            <h1 className={styles.tittle}>Dogs App </h1>
            <div className={styles.pagination}>
                <h2><i class="fa-solid fa-heart"></i> Tus Razas favoritas</h2>
                <Pagination page={page} setPage={setPage} countPage={countPage}  />
            </div>       
            <Dogs dogs={dogsByPage} favorites={true}/>
        </div>
    );
}

export default Favorites;