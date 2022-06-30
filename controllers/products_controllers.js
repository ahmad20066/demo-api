const Product = require('../models/product');
const { post } = require('../routes/shops');
const {validationResult} = require('express-validator/check');

exports.addProduct = (req,res,next) => {   
    const addedProduct = new Product({  
        imageUrl : req.body.imageUrl,
        title : req.body.title,
        price : req.body.price, 
        description : req.body.description      
    });
    addedProduct.save().then(() => {
        res.status(200).json({
            Message : 'Product created succesfully',
            product : addedProduct
        });
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
}
exports.getProducts = (req,res,next) => {
    Product.find().then(products => {
        res.status(200).json(
            {
                products : products
            }
        )
    })
}
exports.getProductById = (req,res,next) => {
    const productId = req.params.productId;
    Product.findById(productId).then(product => {
        if(!product){
            const error = new Error('Product not found');
            error.statusCode = 422;
            throw error;
        }
        res.status(200).json(product);
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
}

