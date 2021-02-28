const express = require('express');
const router = express.Router();
const Departements = require('../models/departement');
const Reseaux = require('../models/Reseaux');
const axios = require('axios')

// get par id de departements ou il ya long /lat du departement choisi
// test: ok ok
// router.get('/position/:departement', async (req, res) => {

//     try {
//         const depart = req.params.departement // Id de frant 
//         const departs = await Departements.findById(depart)

//         // const positionDepart = departs.map(elem => {
//         //     return {
//         //         name: elem.name,
//         //         code: elem.code
//         //     }
//         // })

//         console.log(' positionDepart', positionDepart)
//         res.json(departs)
//     } catch (error) {
//         console.log(error);
//         res.status(400).json('message  error')
//     }
// })

// get tout de la bd  de departements ou vous aurez accée a tous les id de departement 
//et les details
// test : ok ok ok 
router.get('/recup/departement', async (req, res) => {
    try {
        const departements = await Departements.find().lean()
        const recupdepartement = departements.map(elem => {
            return {

                name: elem.name,
                code: elem.code,

            }
        })
        res.json(recupdepartement)
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})


// get filtre pour le button  liste des departements , 
//recupere les antennes par cp de departements(ex:75)
// accès au nombre d'antennes de chaque operateur dans le departement
//et nombre totale dans le departements 
// la position centrale  du departement
// test :ok  ok 
router.get('/antennes/:departement', async (req, res) => {
    try {
        const cps = req.params.departement// id de frant
        let regexp = new RegExp(`^${cps}`)
        const departement = await Departements.findOne({ code: cps })
        //return res.json(departement)
        const datadepartement = await Reseaux.find({ cp: regexp })
        const data = datadepartement.map(elem => {
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
        let regexOrange = new RegExp("ORANGE");
        const arrayOrange = await Reseaux.find({ cp: regexp, operateur: regexOrange })
        let regexSFR = new RegExp("SFR");
        const arraySFR = await Reseaux.find({ cp: regexp, operateur: regexSFR })
        let regexBOUYGUES_TELECOM = new RegExp("BOUYGUES TELECOM");
        const arrayBOUYGUES_TELECOM = await Reseaux.find({ cp: regexp, operateur: regexBOUYGUES_TELECOM })
        res.json({
            countOperators: {
                countTotalZone: data.length,
                countBouygues: arrayBOUYGUES_TELECOM.length,
                countOrange: arrayOrange.length,
                countSfr: arraySFR.length
            },
            cordinatesDepartement: {
                latitude: departement.loc[1],
                longitude: departement.loc[0]
            },
            data
        })
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

router.get('/name/departement', async (req, res) => {
    try {
        const departements = req.body.departement

        for (let index = 0; index < departements.length; index++) {
            const element = departements[index]

            const url = encodeURI(`https://eu1.locationiq.com/v1/search.php?key=pk.44db95e257b01b47fc818b3c4d8a0e2e&format=json&countrycodes=fr&county=${element.name}`)

            await new Promise(r => setTimeout(r, 1000)); //sleep - it waits 750 miliseconds

            const { data } = await axios.get(url)

            element.loc = [data[0].lon, data[0].lat],

                element.boundingbox = {
                    latsw: data[0].boundingbox[0],
                    latne: data[0].boundingbox[1],
                    lngsw: data[0].boundingbox[2],
                    lngne: data[0].boundingbox[3]
                }
        }

        console.log('departements', departements);
        await Departements.insertMany(departements)

        res.json({ count: departements.length, departements })
    } catch (error) {
        console.log('Error occured: ', error);
        res.status(500).send(error)
    }
})

module.exports = router