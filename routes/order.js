const express = require('express');
const router = express.Router();
const controller = require('../controllers/order_controller');
const isAuth = require('../middleware/is_auth');
//POST/orders/addOrder
router.post('/addOrder',isAuth,controller.addOrder);



module.exports = router;
