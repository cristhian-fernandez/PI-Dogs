import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dogs from '../../components/Dogs/Dogs';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/searchBar';
import { getAllDogs } from '../../redux/actions/actions';
import styles from  './Home.module.css';

function Home() {
    const dogs = useSelector((state) => state.dogs);
    const [page, setPage] = useState(1);
    const byPage = 8;
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs());
    }, [dispatch]);

    let countPage = Math.ceil(dogs.length / byPage);

    let dogByPageMin = (page - 1)*byPage;
    let dogByPageMax = (page - 1)*byPage + byPage;
    const dogsByPage = dogs.slice(dogByPageMin,dogByPageMax);

    return (
        <div className={styles.home}>
            <h1 className={styles.tittle}>Dogs App </h1>
            <SearchBar /> 
            <Filters /> 
            <div className={styles.pagination}>
                <h2 className={styles.sub_tittle}>Más de 250 razas de perros</h2>
                <Pagination page={page} setPage={setPage} countPage={countPage}  />
            </div>
            
            <Dogs dogs={dogsByPage} />
        </div>
    );
}

export default Home;