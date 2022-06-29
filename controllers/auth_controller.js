const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.signUp = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password,12).then(hashedPassword => {
        const user = new User({
            name : name,
            email : email,
            password : hashedPassword,

        })
        return user.save();
    }).then(user => {
        res.status(200).json({
            Message : "User created successfully",
            user : user
        })
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });

}
exports.logIn = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({email : email}).then(user => {
        if(!user){
            const error = new Error('User not found');
            error.statusCode = 422;
            throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password,user.password)
    }).then(isEqual => {
        if(!isEqual){
            const error = new Error('Wrong password');
            error.statusCode = 422;
            throw error;
        }
        const token = jwt.sign({userId : loadedUser._id},"ahmadSecret");
        res.status(200).json({
            Message : 'Logged in successfully',
            token : token,
            userId : loadedUser._id
        })
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    })
}