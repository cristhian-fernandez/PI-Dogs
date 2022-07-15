import React from 'react';
import { useDispatch } from 'react-redux';
import { ASCENDENTE, DESCENDENTE } from '../../../utils/filters';
import { sortWeight } from '../../../redux/actions/actions';

function OrderWeight() {
    const dispatch = useDispatch();
    const onSelectChange = (e) => {
        dispatch(sortWeight(e.target.value));
    }
    return (
        <div>
            <label>Ordenar por Peso</label>
            <select name='select' onChange={onSelectChange} id='orderWeight'>
                <option value="0" >Seleccione</option>
                <option value={ASCENDENTE} >ascendente</option>
                <option value={DESCENDENTE} >descendente</option>
            </select>
        </div>
    );
}

export default OrderWeight;