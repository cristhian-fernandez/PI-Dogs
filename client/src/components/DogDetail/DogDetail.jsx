import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDogDetail, getDog } from '../../redux/actions/actions';
import styles from  './DogDetail.module.css';
import loading from  '../../img/loading.gif';

function DogDetail(props) {
    const dogDetail = useSelector((state) => state.dogDetail);
    const id = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDog(id));

        return () => {
            dispatch(clearDogDetail());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    return (
        <div className={styles.dogDetail}>
            {
                dogDetail.name ? <div >
                    <h3 className={styles.dogDetail_name}>{dogDetail.name}</h3>
                    <img src={dogDetail.image} alt={dogDetail.name} className={styles.dogDetail_img}/>
                    <h3>Características:</h3>
                    <p className={styles.dogDetail_temperaments}><span>Temperamentos: </span>{dogDetail.temperaments}</p>
                    <p className={styles.dogDetail_height}><span>Altura: </span>{dogDetail.height} cm</p>
                    <p className={styles.dogDetail_weight}><span>Peso: </span>{dogDetail.weight} Kg</p>
                    <p className={styles.dogDetail_life_span}><span>Años de vida: </span>{dogDetail.life_span}</p>
                </div> : <div className={styles.dogDetail_loading}><img src={loading} alt="loading"/><h2>Cargando...</h2></div>
            }
        </div>
    );
}

export default DogDetail;