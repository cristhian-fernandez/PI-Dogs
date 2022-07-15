import React from 'react';
import { useDispatch } from 'react-redux';
import { sortRace } from '../../../redux/actions/actions';
import { ASCENDENTE, DESCENDENTE } from '../../../utils/filters';

function OrderRace() {
    const dispatch = useDispatch();
    const onSelectChange = (e) => {
        dispatch(sortRace(e.target.value));
    }
    return (
        <div>
            <label>Ordenar por Raza</label>
            <select name='select' onChange={onSelectChange} id='orderRace'>
                <option value="0" >Seleccione</option>
                <option value={ASCENDENTE} >ascendente</option>
                <option value={DESCENDENTE} >descendente</option>
            </select>
        </div>
    );
}

export default OrderRace;