const axios = require('axios')
const mongoose = require('mongoose');
const departement = require('./models/departement');
const Departements = require('./models/departement');
const Reseaux = require('./models/Reseaux');

mongoose.connect("mongodb://localhost:27017/test_routes_back_front",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

async function getAntennas(boundingbox) {

    const uri = `https://www.antennesmobiles.fr/get.php?func=antenne&operateurs=BOUYGUES%20TELECOM,FREE%20MOBILE,ORANGE,SFR&reseaux=5G&active=1&freq=700,800,900,1800,2100,2600,3500&modifstart=&modifend=&start=&end=&latne=${boundingbox.latne}&lngne=${boundingbox.lngne}&latsw=${boundingbox.latsw}&lngsw=${boundingbox.lngsw}&support=0`

    const result = await axios(uri)
    // console.log(result)

    var buf = new Buffer.from(result.data, 'base64');

    const bufJson = buf.toString();

    const convertbuf = JSON.parse(bufJson)

    //console.log('convertbuf :', convertbuf ? 'hollaaaa' : 'test')
    console.log('convertbuf :', convertbuf.antennes.length)

    return convertbuf.antennes
}

// une fonction pour recupere tout les departement 
async function free() {
    try {

        // const departements = await Departements.find().lean().limit(10).exec()
        const departements = await Departements.find().lean().exec()
        console.log('resultFinal le 1er', departements.length);
        let resultFinal = []

        for (let index = 0; index < departements.length; index++) {
            const elem = departements[index]

            // console.log('code departement', elem.code);

            const antennesDepartement = await getAntennas(elem.boundingbox)

            // await new Promise(r => setTimeout(r, 500)); // Sleep

            //  console.log(antennesDepartement);
            resultFinal = resultFinal.concat(antennesDepartement)

        }

        // let data_reseaux = [...new Set(resultFinal.map((item) => item.adr))];
        // console.log('resultFinal le 1er', data_reseaux[0]);
        
        // data_reseaux = data_reseaux
        // .map(adr => resultFinal.find(resultFinal.adr == adr))
        // .map(elem => {
        //     return {
        //         operateur: elem.operateur,
        //         ville: elem.ville,
        //         adr: elem.adr,
        //         cp: elem.cp,
        //         loc: {
        //             type: "Point",
        //             coordinates: [
        //                 elem.loc[1],
        //                 elem.loc[0]
        //             ]
        //         }
        //     }
        // })

        let data_reseaux = Array.from(new Set(resultFinal.map(a => a.id)))
                                .map(id => {
                                return resultFinal.find(a => a.id === id)
                                })
                                
        console.log(data_reseaux.length)
        console.log(data_reseaux[0])

        data_reseaux = data_reseaux.map(elem => {
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

        console.log(data_reseaux[0])
        const reseaux = await Reseaux.insertMany(data_reseaux)

        process.exit()
    } catch (err) {

        console.log('Error:', err)
        process.exit()
    }


}

free()

// const url = encodeURI(`https://eu1.locationiq.com/v1/search.php?key=pk.44db95e257b01b47fc818b3c4d8a0e2e&format=json&countrycodes=fr&county=${element.name}`)
//const urlFree = encodeURI(`https://www.antennesmobiles.fr/get.php?func=antenne&operateurs=FREE%20MOBILE&reseaux=5G&active=0&freq=700,800,900,1800,2100,2600,3500&modifstart=&modifend=&start=&end=&latne=44.985916707414475&lngne=19.343482550544103&latsw=34.91041599087398&lngsw=-0.8713611994561474&support=0`)
