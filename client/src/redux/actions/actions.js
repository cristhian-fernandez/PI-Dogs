import {
    GET_ALL_DOGS,
    GET_ALL_TEMPERAMENTS,
    GET_DOG_DETAIL,
    ADD_DOG_FAVORITE,
    REMOVE_DOG_FAVORITE,
    CREATE_DOG,
    CLEAR_DOG_DETAIL,
    SEARCH_DOGS,
    SORT_RACE,
    SORT_WEIGHT,
    FILTER_RACE,
    FILTER_TEMPERAMENT
} from "../constants/constants";
import axios from "axios";

const urlDog = '/api/dogs';
const urlTemperament = '/api/temperaments';

export const getAllDogs = () => {
    return async (dispatch) => {
        axios.get(urlDog)
        .then(responde => {
            dispatch({
                type : GET_ALL_DOGS,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}

export const getDog = (id) => {
    return async (dispatch) => {
        axios.get(urlDog+'/'+ id)
        .then(responde => {
            dispatch({
                type : GET_DOG_DETAIL,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}

export const createDog = (values) => {
    return async (dispatch) => {
        axios.post(urlDog, values)
        .then(responde => {
            dispatch({
                type : CREATE_DOG,
                payload : responde.data
            })
        })
        .catch( e => console.log(e));
    }
}
export const searchDogs = (search) => {
    return async (dispatch) => {
        axios.get(urlDog+'?name='+search)
        .then(responde => {
            dispatch({
                type : SEARCH_DOGS,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}

export const sortRace = (order) => {
    return {
        type : SORT_RACE,
        payload : order
    }
}

export const sortWeight = (order) => {
    return {
        type : SORT_WEIGHT,
        payload : order
    }
}

export const filterRace = (filter) => {
    return {
        type : FILTER_RACE,
        payload : filter
    }
}

export const filterTemperament = (filter) => {
    return {
        type : FILTER_TEMPERAMENT,
        payload : filter
    }
}

export const clearDogDetail = () => {
    return {
        type: CLEAR_DOG_DETAIL
    }
}

export const getAllTemperaments = () => {
    return async (dispatch) => {
        axios.get(urlTemperament)
        .then(responde => {
            dispatch({
                type : GET_ALL_TEMPERAMENTS,
                payload : responde.data
            })
        })
        .catch( e => console.log(e)); 
    }
}

export const addDogFavorite = (favorite) => {
    return {
        type: ADD_DOG_FAVORITE,
        payload : favorite
    }
}

export const removeDogFavorite = (idFavorite) => {
    return {
        type: REMOVE_DOG_FAVORITE,
        payload : idFavorite
    }
}