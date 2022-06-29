const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shopSchema = Schema({
    name : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true,
    }
});
module.exports = mongoose.model('Shop',shopSchema);