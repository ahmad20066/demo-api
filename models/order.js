const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = Schema({
    userId : {
     type :Schema.Types.ObjectId,
     required :true,
    },
    products : [{
        product : {
            type : Schema.Types.ObjectId,
            ref : 'Product'
        },
        quantity: {
            type : Number,
            default : 0,
        }
    }],
    date : {
       type : Date,
       default : Date.now(),
    }

})
module.exports = mongoose.model('Order',orderSchema);