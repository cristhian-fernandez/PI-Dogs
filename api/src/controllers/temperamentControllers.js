const axios = require('axios');
const {Temperament} = require('../db'); 

const getAllTemperamentsApi = async () => {
    let allTemperaments = [];
    try {
        const temperamentsApi = await axios.get('https://api.thedogapi.com/v1/breeds')
        .then(responde => responde.data.map( el => el.temperament));
        const tempRemoveNull = temperamentsApi.filter(el => el !== null).join(',').split(',');
        const tempRemoveSpaces = tempRemoveNull.map(el => el.split(' ').join(''));
        allTemperaments = tempRemoveSpaces.filter((item,index)=>tempRemoveSpaces.indexOf(item) === index);

        return allTemperaments;
    } catch (error) {
        return error.toString();
    }
}

const getAllTemperaments = async () => {
    try {
        let allTemperamentsApi = await getAllTemperamentsApi();
        let allTemperamentsDb = await Temperament.findAll();

        let arrayTemperamentDb = allTemperamentsDb.map(el => el.name);
        let allTemperaments = allTemperamentsApi.filter(el =>!arrayTemperamentDb.includes(el));

        if(allTemperaments.length> 0){
            const arrayPromises = allTemperaments.map(async (el) => {
                if(el !== '') await Temperament.create({name:el});
            });
            await Promise.all(arrayPromises);
        }

        console.log('Temperamentos Cargados Correctamente a la BD');

    } catch (error) {
        return error.toString();
    }
}

getAllTemperamentsApi();

module.exports = {
    getAllTemperaments
}