const express = require('express');
const authRouter = express.Router();
const { body } = require('express-validator');


const {check , validationResult} = require("express-validator");


const {signup,signin} = require('../controllers/auth');


authRouter.post("/signup",
[
    body('username').isLength(3).withMessage('Firstname must be a atleast 3 characters long'),
    body('email').isEmail().withMessage('Email must be a valid email'),
    body('password').isLength(8).withMessage('Password should be of 8 characters')
],
signup);

authRouter.post("/signin",[
    body('email').isEmail().withMessage('Email must be a valid email'),
    body('password').isLength(8).withMessage('Password should be of 8 characters')
],signin);




module.exports = authRouter;