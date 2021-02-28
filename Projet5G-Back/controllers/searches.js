const express = require('express')
const router = express.Router()
const Search = require('../models/Searches')


//  get IPaddress et address du l'utilisteurs (l'address de barre de recherchre)
// test: ok ok 
router.get('/:IPaddress/:address/', async (req, res) => {
    const { IPaddress, address } = req.params

    // une fonction pour recuperer les adresse IP autoumatiquement
    const { networkInterfaces } = require('os');

    const nets = networkInterfaces();
    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {

            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }

                results[name].push(net.address);
            }

        }
    }
    const newsearch = await Search.insertMany({
        IPaddress: results,
        address

    })
    res.json(newsearch)

})


module.exports = router