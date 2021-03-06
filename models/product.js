const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Shop = require('./shop');
const productSchema = Schema({
    
    imageUrl : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required :true
    },
    description : {
        type : String,
        required : true
    }

});
module.exports = mongoose.model('Product',productSchema);