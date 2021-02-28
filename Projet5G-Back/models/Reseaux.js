const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reseaux = new Schema({

    operateur: String,
    ville: String,
    adr: String,
    loc : {
        type: {
            type: String,
            enum: ['Point'],
            require : true
        },
        coordinates: {
            type: [Number],
            require : true  
        },
        
    },
    cp: String
});
Reseaux.index({ loc: '2dsphere' });

module.exports = new mongoose.model('Reseaux', Reseaux);


// models ppour la BDD de Reseaux