const mongoose = require("mongoose");
const searchShema = new mongoose.Schema({

    address: String,
    IPaddress: Array

})
const Search = mongoose.model('Search', searchShema)
module.exports = Search