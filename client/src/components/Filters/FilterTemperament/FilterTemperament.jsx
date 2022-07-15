import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTemperament, getAllTemperaments } from '../../../redux/actions/actions';
import { ALL_TEMPERAMENTS } from '../../../utils/filters';

function FilterTemperament() {
    const temperaments = useSelector((state) => state.temperaments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTemperaments());
    }, [dispatch]);

    const onSelectChange = (e) => {
        // dispatch(filterTemperament(e.target[e.target.selectedIndex].innerText));
        dispatch(filterTemperament(e.target.value));
    }
    return (
        <div>
            <label>Filtrar por Temperamento</label>
                <select name='select' onChange={onSelectChange} id='filterTemperament'>
                    <option value={ALL_TEMPERAMENTS} >Todas los Temperamentos</option>
                    {
                        temperaments.map(temperament => {
                            return temperament.id ?  <option value={temperament.name} key={temperament.id}>{temperament.name}</option> : ''
                        })
                    }
            </select>
        </div>
    );
}

export default FilterTemperament;