import { ASCENDENTE,ALL_TEMPERAMENTS,ALL_RACES,ALL_RACES_API,ALL_RACES_DB } from "../../utils/filters";
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

const initialState = {
    dogs : [],
    allDogs : [],
    dogDetail : {},
    dogsFavorites :[],
    temperaments : []
};

const rootReducer = (state = initialState, action) => {
    const dogs = [...state.allDogs];
    switch(action.type) {
        
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs : [...action.payload],
                allDogs : [...action.payload]
            }
        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail : action.payload
            }
        case ADD_DOG_FAVORITE:
            return {
                ...state,
                dogsFavorites : [...state.dogsFavorites, action.payload]
            }
        case REMOVE_DOG_FAVORITE:
            return {
                ...state,
                dogsFavorites : state.dogsFavorites.filter(dog => dog.id !== action.payload)
            }
        case CREATE_DOG:
            return {
                ...state,
                dogs : [...state.dogs, action.payload]
            }
        case CLEAR_DOG_DETAIL:
            return {
                ...state,
                dogDetail : {}
            }
        case SEARCH_DOGS:
            return {
                ...state,
                dogs : [state.dogs, ...action.payload]
            }
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments : [state.temperaments, ...action.payload]
            }
        case SORT_RACE:
            let orderedRaces = [...state.dogs];
            orderedRaces.sort((a,b) => {
                if (parseInt(action.payload) === 0) return 0;
                if (a.name < b.name) return action.payload === ASCENDENTE ? -1 : 1;
                if (a.name > b.name) return action.payload === ASCENDENTE ? 1 : -1;
                return 0;
            }); 
            return {
                ...state,
                dogs : orderedRaces
            }
        case SORT_WEIGHT:
            let orderedWeight = [...state.dogs];
            orderedWeight.sort((a,b) => {
                if(parseInt(action.payload) === 0) return 0;
                if(parseInt(String(a.weight).split(' - ')[0]) < parseInt(String(b.weight).split(' - ')[0])) return action.payload === ASCENDENTE ? -1 : 1;
                if(parseInt(String(a.weight).split(' - ')[0]) > parseInt(String(b.weight).split(' - ')[0])) return action.payload === ASCENDENTE ? 1 : -1;
                return 0;
            }); 
            return {
                ...state,
                dogs : orderedWeight
            }
        case FILTER_RACE:
            
            let filteredRaces = [];
            if(action.payload === ALL_RACES) filteredRaces = dogs;
            if(action.payload === ALL_RACES_API) filteredRaces = dogs.filter(dog => String(dog.id).length<8);
            if(action.payload === ALL_RACES_DB) filteredRaces = dogs.filter(dog => String(dog.id).length>8);          
            return {
                ...state,
                dogs : filteredRaces
            }        
        case FILTER_TEMPERAMENT:
            
            const filteredTemperament = action.payload === ALL_TEMPERAMENTS ? dogs : dogs.filter(dog => {
                return String(dog.temperaments).includes(action.payload);
            });
            return {
                ...state,
                dogs : filteredTemperament
            }      
        default: return state;
    };

};

export default rootReducer;