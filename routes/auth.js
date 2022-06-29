const express = require('express');
const controller = require('../controllers/auth_controller');
const router = express.Router();
//POST/auth/signUp
router.post('/signUp',controller.signUp);
//POST/auth/logIn
router.post('/logIn',controller.logIn);
module.exports = router;