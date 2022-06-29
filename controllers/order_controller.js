const Order = require('../models/order');
exports.addOrder = (req,res,next) => {
    const userId = req.userId;
    const products = req.body.products;
    const newOrder = new Order({
        products : products
    });
    newOrder.save().then(() => {
        res.status(200).json({
            Message : "Order added succesfully",
            order : newOrder
        })
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    })
}
exports.getOrdersOfUser = (req,res,next) => {
    const userId = req.params.userId;
    
    Order.find({userId : userId}).populate({path : 'products.product',populate :{
        path : 'manufacturer',
        model : 'Shop'
    }}).then(orders => {
        res.status(200).json(orders);
    })
}