const express = require('express');
const router = express.Router();
const controller = require('../controllers/shop_controller');
const {body} = require('express-validator/check');
const isAuth = require('../middleware/is_auth');
//POST/shops/addShop
router.post('/addShop',isAuth,[
    body('name').trim().isLength({max : 10}).withMessage('name is too long'),
    body('imageUrl').isURL().withMessage('Please Enter a valid image url')
],controller.addShop);
//GET/shops
router.get('/',controller.getShops);
module.exports = router;