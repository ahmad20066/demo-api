const express = require('express');
const router = express.Router();
const controller = require('../controllers/products_controllers');
const {body} = require('express-validator/check');
const isAuth = require('../middleware/is_auth');
//GET/products/shop/shopId

//POST/products/addProduct
router.post('/addProduct',controller.addProduct);
//Get/products
router.get('/',controller.getProducts);
//GET/products/productById/:productId
router.get('/productById/:productId',isAuth,controller.getProductById);
//GET/products/productByShop/:shopId

module.exports = router;