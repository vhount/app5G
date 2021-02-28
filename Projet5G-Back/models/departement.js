const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Departements = new Schema({
    loc: [Number],
    boundingbox: {
        type: {
            latsw: String,
            latne: String,
            lngsw: String,
            lngne: String,

        }

    },
    name: String,
    code: String


});

module.exports = new mongoose.model('Departements', Departements);
