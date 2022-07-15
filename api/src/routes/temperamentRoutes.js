const { Router } = require('express');
const {Temperament} = require('../db'); 
// const {getAllTemperaments} = require('../controllers/temperamentControllers'); 
const router = Router();

router.get( '/' , async(req, res,next)=>{ 
    try {
        const temperaments = await Temperament.findAll();
        const orderedTemperaments = temperaments.sort((a,b) => {
            return a.name < b.name ? -1 : 1;
        });

        res.status(200).json(orderedTemperaments);
    } catch (error) {
        // res.status(404).send(error.toString());
        next(error);                // Manda los errores a app.js Error catching endware
    }
});

// router.post( '/' , async(req, res,next)=>{ 
    
//     try {
//         let allTemperamentsApi = await getAllTemperaments();
//         let allTemperamentsDb = await Temperament.findAll();

//         let arrayTemperamentDb = allTemperamentsDb.map(el => el.name);

//         let allTemperaments = allTemperamentsApi.filter(el =>!arrayTemperamentDb.includes(el));

//         const arrayPromises = allTemperaments.map(async (el) => await Temperament.create({name:el}));
//         await Promise.all(arrayPromises);

//         // const newTemperaments = await Temperament.bulkCreate(allTemperaments); Forma de {}

//         res.status(200).json(allTemperaments);

//     } catch (error) {
//         next(error);
//     }

// });

router.post( '/' , async(req, res,next)=>{ 
    const {name} = req.body;
    try {
        if (name) {
            const newTemperament = await Temperament.create({
                name
            });
            res.status(200).json(newTemperament);
        }
    } catch (error) {
        next(error);
    }
});


module.exports = router;