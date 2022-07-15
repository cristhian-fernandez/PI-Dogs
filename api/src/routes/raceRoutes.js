const { Router } = require('express');
const {Race} = require('../db'); 
const axios = require('axios'); 
// const { Op } = require('sequelize');
const {getAllDogs} = require('../controllers/dogControllers'); 
require('dotenv').config();
const router = Router();

//  http://localhost:3001/api/race/

router.get( '/' , async(req, res,next)=>{ 
    const {name} = req.query;    
    try {
        let allDogs = await getAllDogs();
        if (name) {
            let dogs = await allDogs.filter(dog =>{
                return dog.name.toLowerCase().includes(name.toLowerCase());
            })
            res.status(200).json(dogs);
        } else {
            res.status(200).json(allDogs);
        }
    } catch (error) {
        next(error);
    }
});

router.get( '/:idRaza' , async(req, res,next)=>{ 
    const {idRaza} = req.params;
    
    try {
        if (idRaza) {
            let allDogs = await getAllDogs();
            let dog = await allDogs.find(dog =>dog.id == idRaza);
            return res.status(200).json(dog ? dog : 'No hay detalle de perro');
        } else {
            throw new Error('Falta dato codigo Raza');
        }
    } catch (error) {
        next(error);
    }
});

router.post( '/' , async(req, res,next)=>{ 
    const { name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, image, idTemperaments} = req.body;
    try {
        if (name && height_min && weight_min && image) {
            if (idTemperaments) {
                const newDog = await Race.create({
                    name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, image
                });
                // const dogTemperament = await newDog.addTemperaments(idTemperaments);
                await newDog.addTemperaments(idTemperaments);
                res.status(201).json(newDog); 
            } else {
                throw new Error('Falta seleccionar temperamentos');
            }
        }else{
            throw new Error('Falta ingresar algún dato');
        }
    } catch (error) {
        next(error);
    }
});


module.exports = router;