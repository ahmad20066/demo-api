const express = require('express');
const router = express.Router();
const controller = require('../controllers/products_controllers');
const {body} = require('express-validator/check');
const isAuth = require('../middleware/is_auth');
//GET/products/shop/shopId

//POST/products/addProduct
router.post('/addProduct',isAuth,[
    body('title').trim().isLength({min : 5}).withMessage('title should have more than 5 cahracters'),
    body('title').trim().isLength({max : 10}).withMessage('title should have less than 10 characters'),
    body('price').isNumeric().withMessage('Please Enter a valid number'),
    body('imageUrl').isURL().withMessage('Please Enter a valid imageUrl'),
],controller.addProduct);
//Get/products
router.get('/',controller.getProducts);
//GET/products/productById/:productId
router.get('/productById/:productId',isAuth,controller.getProductById);
//GET/products/productByShop/:shopId

module.exports = router;