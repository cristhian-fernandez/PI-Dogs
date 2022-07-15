import React from 'react';
import DogCard from "../DogCard/DogCard";
import styles from './Dogs.module.css';
import loading from  '../../img/loading3.gif';

function Dogs(props) {
    if (props.dogs.length !== 0) {
        return (
            <div>
                <div className={styles.dogs_cards}>
                    {
                        props.dogs && props.dogs.map( dog => {
                            
                            return (
                                <DogCard 
                                    key = {dog.id}
                                    id = {dog.id}
                                    name = {dog.name}
                                    image = {dog.image}
                                    temperaments = {dog.temperaments}
                                    weight = {dog.weight}
                                    dogs = {props.dogs}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    } else {
        if(props.favorites) return <div className={styles.dogs_loading}><h2> <i class="fa-solid fa-heart-crack"></i> No hay razas favoritas elegidas <i class="fa-solid fa-heart-crack"></i></h2></div>
        else return <div className={styles.dogs_loading}><h2>Cargando ...</h2><img src={loading} alt="loading"/></div>
    }
}

export default Dogs;


