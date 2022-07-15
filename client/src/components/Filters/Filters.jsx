import React from 'react';
import FilterRace from './FilterRace/FilterRace';
import FilterTemperament from './FilterTemperament/FilterTemperament';
import OrderRace from './OrderRace/OrderRace';
import OrderWeight from './OrderWeight/OrderWeight';
import styles from  './Filters.module.css';
import { ALL_TEMPERAMENTS, ALL_RACES } from '../../utils/filters';
import { useDispatch } from 'react-redux';
import { filterRace } from '../../redux/actions/actions';


function Filters() {

    const dispatch = useDispatch();

    const resetFilters = () => {
        const filterTemperament  = document.getElementById('filterTemperament');
        const filtersRace  = document.getElementById('filterRace');
        const orderRace  = document.getElementById('orderRace');
        const orderWeight  = document.getElementById('orderWeight');

        dispatch(filterRace(ALL_RACES));
        
        filterTemperament.value = ALL_TEMPERAMENTS;
        filtersRace.value = ALL_RACES;
        orderRace.value = "0";
        orderWeight.value = "0";
    }

    return (
        <div className={styles.filters}>
            <FilterTemperament />
            <FilterRace />
            <OrderRace />
            <OrderWeight />
            <button onClick={resetFilters} className={styles.btn_reset}>Quitar Filtros</button>
        </div>
    );

}

export default Filters;