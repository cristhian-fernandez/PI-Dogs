import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDogFavorite, removeDogFavorite } from '../../redux/actions/actions';

import style from './DogCard.module.css';

function DogCard(props) {
    const dogsFavorites = useSelector((state) => state.dogsFavorites);
    const dispatch = useDispatch();

    let dogfavorite = dogsFavorites.find(dogs => dogs.id === props.id);
    const [favorite, setFavorite] = useState(dogfavorite ? "❤️" : "🖤");

    const onClickFavorite = (e)=> {
        e.preventDefault();

        if(dogfavorite){
            dispatch(removeDogFavorite(props.id));
            setFavorite("🖤");
        }else{
            const dog = props.dogs.find(dogs => dogs.id === props.id);
            dispatch(addDogFavorite(dog)); 
            setFavorite("❤️");
        }
    }
    
    return (
        <>
            {
                props.id ? <div className={style.detailCard_container} >
                    <div className={style.detailCard}>
                        <img src={props.image} alt={props.name} /> 
                        <div className={style.detailCard_name}>
                            <Link to={`/dog/${props.id}`}>
                                <span>{props.name}</span>
                                <i className={"fa-solid fa-paw"}></i>
                            </Link>
                        </div>
                        <p className={style.detailCard_temperaments}>{props.temperaments}</p>
                        <p className={style.detailCard_weight}><span>Peso:</span> {props.weight} Kg</p>
                        <button className={style.detailCard_favorite} onClick={onClickFavorite} >{favorite}</button>
                    </div> 
                </div>  : ''
            }  
        </>  
    );
}

export default DogCard;