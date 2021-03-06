const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const userSchema = Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type  :String,
        required : true,
    },
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order"
        }
    ],
    products : [
        {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],
});
module.exports = mongoose.model('User',userSchema);