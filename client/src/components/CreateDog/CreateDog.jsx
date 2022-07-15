import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createDog, getAllTemperaments } from '../../redux/actions/actions';
import styles from './CreateDog.module.css';
import dog_create from '../../img/dog_create.jpg';

function CreateDog() {
    const temperaments = useSelector((state) => state.temperaments)
    const [input, setInput] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        image: "",
        idTemperaments : []
    });
    const [error, setError] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        image: "",
        idTemperaments : []
    });

    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getAllTemperaments());
    }, [dispatch]);

    const onInputChange = (e) => {
        e.preventDefault();
        setInput(
            {...input, [e.target.name]:e.target.value}
        );
        setError(
            validateInput({...input, [e.target.name]:e.target.value})
        );
    }
    const onCheckChange = (e) => {
        let findTemperament = input.idTemperaments.find(el => el === e.target.id)
        let idTemperaments = [...input.idTemperaments];

        if(findTemperament) idTemperaments = idTemperaments.filter(el => el !== e.target.id);
        else idTemperaments.push(e.target.id); 

        setInput(
            {...input, idTemperaments}
        );

        setError(
            validateInput({...input,idTemperaments})
        );
    }
    const onSubmit = (e) => {
        e.preventDefault();

        if(Object.entries(error).length === 0 && input.idTemperaments.length > 0){
           
            const newDog = {
                name: input.name, 
                height_min : input.height_min, 
                height_max : input.height_max, 
                weight_min : input.weight_min, 
                weight_max : input.weight_max, 
                life_span_min : input.life_span_min, 
                life_span_max : input.life_span_max, 
                image : input.image !== '' ? input.image : 'https://cdn-icons-png.flaticon.com/512/1596/1596810.png', 
                idTemperaments : input.idTemperaments
            }
            dispatch(createDog(newDog));
            setInput({
                name: "",
                height_min: "",
                height_max: "",
                weight_min: "",
                weight_max: "", 
                life_span_min: "",
                life_span_max: "",
                image: "",
                idTemperaments : []
            });
            alert('Raza de perro creado correctamente');
            history.push('/home');
        }else{
            if(input.name === '') return alert('Ingrese un nombre de raza');
            if(error.name) return alert(error.name);
            if(error.height_min) return alert(error.height_min);
            if(error.height_max) return alert(error.height_max);
            if(error.weight_min) return alert(error.weight_min);
            if(error.weight_max) return alert(error.weight_max);
            if(error.life_span_min) return alert(error.life_span_min);
            if(error.image) return alert(error.image);
            if(error.idTemperaments) return alert(error.idTemperaments);
        }
    }

    return (
        <div className={styles.createDog}>
            <picture>
                <img src={dog_create} alt="dog" />
            </picture>
            <form onSubmit={onSubmit} className={styles.createDog_form}>
                <h1><i className={"fa-solid fa-paw"}></i> Crea tu Propia Raza de Perro <i className={"fa-solid fa-paw"}></i></h1>
                <div className={styles.createDog_content}>
                    <div className={styles.createDog_content__items}>
                        <div className={styles.createDog_seccion}>
                            <label className={styles.createDog_label}>( * ) Nombre: </label>
                            <input 
                                type="text" 
                                name='name'
                                value={input.name}
                                placeholder='Ingresar nombre' 
                                onChange={onInputChange} className={error.name && styles.danger}/>
                            <p className={styles.danger}>{error.name}</p>
                        </div>
                        <div className={styles.createDog_seccion}>
                            <label>( * ) Altura (en cm): </label>
                            <div className={styles.createDog_item}>
                                <div>
                                    <label>Mínima: </label>
                                    <input 
                                        type="number"
                                        name='height_min'
                                        value={input.height_min}
                                        placeholder='0'
                                        onChange={onInputChange} className={error.height_min && styles.danger}/>
                                    <p className={styles.danger}>{error.height_min}</p>
                                </div>
                                <div>
                                    <label>Máxima: </label>
                                    <input 
                                        type="number" 
                                        name='height_max'
                                        value={input.height_max}
                                        placeholder='0'
                                        onChange={onInputChange} className={error.height_max && styles.danger}/>
                                    <p className={styles.danger}>{error.height_max}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.createDog_seccion}>
                            <label>( * ) Peso (en Kg): </label>
                            <div className={styles.createDog_item}>
                                <div>
                                    <label>Mínimo: </label>
                                    <input 
                                        type="number" 
                                        name='weight_min'
                                        value={input.weight_min}
                                        placeholder='0'
                                        onChange={onInputChange} className={error.weight_min && styles.danger}/>
                                    <p className={styles.danger}>{error.weight_min}</p>
                                </div>
                                <div>
                                    <label>Máximo: </label>
                                    <input 
                                        type="number" 
                                        name='weight_max'
                                        value={input.weight_max}
                                        placeholder='0'
                                        onChange={onInputChange} className={error.weight_max && styles.danger}/>
                                    <p className={styles.danger}>{error.weight_max}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.createDog_seccion}>
                            <label>( * ) Años de vida (en años): </label>
                            <div className={styles.createDog_item}>
                                <div>
                                    <label>Mínimo: </label>
                                    <input 
                                        type="number" 
                                        name='life_span_min'
                                        value={input.life_span_min}
                                        placeholder='0' 
                                        onChange={onInputChange} className={error.life_span_min && styles.danger}/>
                                    <p className={styles.danger}>{error.life_span_min}</p>
                                </div>
                                <div>
                                    <label>Máximo: </label>
                                    <input 
                                        type="number" 
                                        name='life_span_max'
                                        value={input.life_span_max}
                                        placeholder='0' 
                                        onChange={onInputChange} className={error.life_span_max && styles.danger}/>
                                    <p className={styles.danger}>{error.life_span_max}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.createDog_seccion}>
                            <label className={styles.createDog_label}>Url de Imagen: </label>
                            <input 
                                type="text" 
                                name='image'
                                value={input.image}
                                placeholder='Ingresar url de Imagen' 
                                onChange={onInputChange} className={error.image && styles.danger}/>
                            <p className={styles.danger}>{error.image}</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.temperaments}>
                            <div className={styles.temperaments_tittle}>
                                <label >( * ) Seleccione una o varios temperamentos: </label>
                                <p className={styles.danger}>{error.idTemperaments}</p>
                            </div>
                            <div className={styles.list_temperaments}>
                                
                                    {
                                        temperaments.map(temperament => {
                                            return temperament.id ? <div className={styles.checkbox} key={`check_${temperament.id}`}>
                                                <input key={`input_${temperament.id}`} className={styles.checkbox_item} type="checkbox" id={temperament.id} onChange={onCheckChange}/>
                                                <label key={`label_${temperament.id}`} htmlFor={temperament.id}><span></span>{temperament.name}</label>
                                            </div> : ''
                                        })
                                    }
                            </div>
                        </div>
                        <button type="submit" className={styles.createDog_btn}>Crear Raza</button>
                        <p className={styles.input_required}>( * ) Datos obligatorios</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateDog;


export function validateInput (input){
    let error = {}
    if(!input.name){
      error.name = '* Nombre es requerido';
    }else if(!/^[A-Za-z ]+$/.test(input.name)){
      error.name = '* Nombre es inválido, solo acepta letras';
    }

    if(!input.height_min){
      error.height_min = '* Altura mínima es requerida';
    }else if(!/^[0-9]/.test(input.height_min)){
      error.height_min = '* Solo acepta números positivos';
    }else if(parseInt(input.height_min) > parseInt(input.height_max)){
        error.height_min = '* Altura mínima debe ser menor o igual al máximo.';
    }

    if(!input.height_max){
      error.height_max = '* Altura máxima es requerida';
    }else if(!/^[0-9]/.test(input.height_max)){
      error.height_max = '* Solo acepta números positivos';
    }
    
    if(!input.weight_min){
      error.weight_min = '* Peso mínimo es requerido';
    }else if(!/^[0-9]/.test(input.weight_min)){
      error.weight_min = '* Solo acepta números positivos';
    }else if(parseInt(input.weight_min) > parseInt(input.weight_max)){
        error.weight_min = '* Peso mínimo debe ser menor o igual al máximo.';
    }

    if(!input.weight_max){
      error.weight_max = '* Peso máximo es requerido';
    }else if(!/^[0-9]/.test(input.weight_max)){
      error.weight_max = '* Solo acepta números positivos';
    }
    
    if(!input.life_span_min){
      error.life_span_min = '* Años de vida mínimo es requerida';
    }else if(!/^[0-9]/.test(input.life_span_min)){
      error.life_span_min = '* Solo acepta números positivos';
    }else if(parseInt(input.life_span_min) > parseInt(input.life_span_max)){
        error.life_span_min = '* Vida mínima debe ser menor o igual al máximo.';
    }

    if(!input.life_span_max){
       error.life_span_max = '* Años de vida máximo es requerida';
    }else if(input.life_span_max && !/^[0-9]/.test(input.life_span_max)){
      error.life_span_max = '* Solo acepta números positivos';
    }
  
    if(input.image &&!/^http+\S+/.test(input.image)){
        error.image = '* Url de imagen es inválido, Ejm: http....';
    }
    if (input.idTemperaments.length === 0 ) {
        error.idTemperaments = '* Seleccione al menos un temperamento';
    }
    return error;
}
