const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
const shopsRoute = require('./routes/shops');
const ordersRoute = require('./routes/order');
const authRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/auth',authRouter);
app.use('/shops',shopsRoute);
app.use('/products',productsRoute);
app.use('/orders',ordersRoute);
app.use((error,req,res,next) => {
    const message = error.message;
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        Message : message
    });

})
mongoose.connect('mongodb+srv://ahmad:12345678aa@cluster0.hw3vu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log("Connected");
    app.listen(3000);
});
