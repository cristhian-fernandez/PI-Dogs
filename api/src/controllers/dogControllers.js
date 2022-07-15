const axios = require('axios'); 
// const { YOUR_API_KEY } = process.env;
const {Race,Temperament} = require('../db'); 

const getAllDogs = async () => {
    let allDogs = [];
    try {
        const dogsPromiseApi = axios.get('https://api.thedogapi.com/v1/breeds');
        const dogsPromiseDb = await Race.findAll({
            include : [{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }]
        });

        await Promise.all([dogsPromiseApi,dogsPromiseDb])
        .then(response => {
            const [dogsApi, dogsDb] = response;
            const filterDogsApi = dogsApi.data.map(dog => {
                return {
                    id : dog.id,
                    name : dog.name,
                    weight : getWeight(dog.weight.metric,dog.weight.imperial),
                    height : dog.height.metric,
                    life_span : dog.life_span,
                    temperaments : dog.temperament,
                    image : dog.image.url
                }
            })
            const filterDogsDb = dogsDb.map(dog => {
                return {
                    id : dog.id,
                    name : dog.name,
                    weight : dog.weight,
                    height : dog.height,
                    life_span : dog.life_span,
                    temperaments : dog.temperaments.map(temperament => temperament.name).join(),
                    image : dog.image
                }
            })
            allDogs = [...filterDogsApi, ...filterDogsDb]; 
        })
        return allDogs.sort((a,b) => {
            return a.name < b.name ? -1 : 1;
        });
    } catch (error) {
        return error.toString();
    }
}

function getWeight(metric, imperial) {
    let arrayMetric = metric.split(" - ");
    let resultMetric = arrayMetric[0] !== 'NaN' ? metric : (arrayMetric[1] !== undefined ? arrayMetric[1] : '');

    let arrayImperial = imperial.split(" - ");
    let resultImperial = arrayImperial[0] !== 'NaN' ? convertKg(arrayImperial[0]) : (arrayImperial[1] !== undefined ? convertKg(arrayImperial[1]) : '-');

    if(resultMetric !== '') return String(resultMetric)
    else return String(resultImperial)
}

function convertKg(weight) {
    return Math.round(parseInt(weight)*0.4535)
}

module.exports = {
    getAllDogs,
}