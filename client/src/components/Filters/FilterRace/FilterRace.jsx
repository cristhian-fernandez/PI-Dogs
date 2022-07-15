import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRace } from '../../../redux/actions/actions';
import { ALL_RACES, ALL_RACES_API, ALL_RACES_DB } from '../../../utils/filters';

function FilterRace() {
    const dispatch = useDispatch();
    const onSelectChange = (e) => {
        dispatch(filterRace(e.target.value));
    }
    return (
        <div>
            <label>Filtrar por Raza</label>
            <select name='select' onChange={onSelectChange} id= 'filterRace'>
                <option value={ALL_RACES} >Todos las razas</option>
                <option value={ALL_RACES_API} >Razas existentes</option>
                <option value={ALL_RACES_DB} >Razas creadas</option>
            </select>
        </div>
    );
}

export default FilterRace;