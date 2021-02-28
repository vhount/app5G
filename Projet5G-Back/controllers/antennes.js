const express = require('express');
const router = express.Router();
const Reseaux = require('../models/Reseaux');

/// get par lat et long  pour la bar de search pour qu'en suite 
///recuperer les antennes autour de 1 à 10km defini par l'utilisateurs (slider optionnel)
//par defaut si l'utilisateurs ne choisi pas la valeur slider sera 1km avec Count  de 
// de  chaque operateur 
// apre /:lat vous pouvez mettre ? (ex:/:lat?${maxkm}) dans le network pour le slider
// tester : ok ok 
router.get('/convert/:long/:lat', async (req, res) => {

    try {


        const long = req.params.long
        const lat = req.params.lat
        const maxDistance = req.query.maxkm ? req.query.maxkm : 1000

        const result = await Reseaux.find({

            loc: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat]
                    },

                    $maxDistance: maxDistance,

                }
            }
        })
        const data = result.map(elem => {
            return {
                id: elem._id,
                operateur: elem.operateur,
                ville: elem.ville,
                adr: elem.adr,
                cp: elem.cp,
                latitude: elem.loc.coordinates[1],
                longitude: elem.loc.coordinates[0]
            }




        })
        // res.json(fitredata);
        let arrayOrange = data.filter(function (elem) {
            return elem.operateur === "ORANGE"
        })
        let arrayBOUYGUES = data.filter(function (elem) {
            return elem.operateur === "BOUYGUES TELECOM"
        })


        let arraySFR = data.filter(function (elem) {
            return elem.operateur === "SFR"
        })

        res.json({
            countOperators: {
                countTotalZone: data.length,
                countBouygues: arrayBOUYGUES.length,
                countOrange: arrayOrange.length,
                countSfr: arraySFR.length
            },
            data

        })


    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

// le get filtre par departement et dans l


/// get pour compter tout  les antennes en france  
/// tester : ok ok
router.get('/count', async (req, res) => {
    try {
        const countReseauxs = await Reseaux.countDocuments()
        res.json(countReseauxs);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})









/// get par id et ça va recuperer l'objet de l'antennes
/// test : ok ok
router.get('/antennes/details/:id', async (req, res) => {
    try {
        const antennes = await Reseaux.findById(req.params.id).lean()
        res.json(antennes);
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})
/// post pour les 3000 antennes anviron avec postaman grace à  
//json dans  le dossier antennes 
// test : ok àç voir avec l'équipe front  ok 
router.post('/add/antennes', async (req, res) => {
    try {
        const data_reseaux = req.body.antennes.map(elem => {
            return {
                operateur: elem.operateur,
                ville: elem.ville,
                adr: elem.adr,
                cp: elem.cp,
                loc: {
                    type: "Point",
                    coordinates: [
                        elem.loc[1],
                        elem.loc[0]
                    ]
                }
            }
        })

        await Reseaux.create(data_reseaux)
        res.status(200).json('bravo')
    }
    catch (error) {
        console.log(error);
        res.status(400).json('error')
    }
})

module.exports = router