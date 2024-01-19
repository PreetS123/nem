const express= require('express');
const authController= require("../Controllers/auth.controller");
const { isValidate } = require('../middlewares/register.validator');
const authRouter= express.Router();

authRouter.route('/register').post(isValidate,authController.userRegister);
authRouter.route('/login').post(authController.userLogin);



module.exports= authRouter;