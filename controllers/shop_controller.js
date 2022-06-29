const Shop = require('../models/shop');
exports.addShop = (req,res,next) => {
    const addedShop = new Shop({
        name : req.body.name,
        imageUrl : req.body.imageUrl,
    });
    addedShop.save().then(result => {
        res.status(200).json({
            Message : "Shop created succesfully",
            shop : addedShop
        })
    })
}
exports.getShops = (req,res,next) => {
    Shop.find().then(shops => {
        res.status(200).json({
            shops : shops
        });
    })
}