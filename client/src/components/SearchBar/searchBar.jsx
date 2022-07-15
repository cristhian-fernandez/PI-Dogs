import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchDogs } from '../../redux/actions/actions';
import styles from  './searchBar.module.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const onInputChange = (e) => {
        setSearch(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchDogs(search));
        setSearch('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={styles.searchBar}>
                    <input type="text" name='search' value={search} placeholder='Buscar raza ...' onChange={onInputChange} className={styles.input_text}/>
                    <input type="submit" value="Buscar" className={styles.input_btn}/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;