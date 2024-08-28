const express=require('express');
const router=express.Router();
const validate=require('../middlewares/validate');
const {authValidation,customValidation}=require('../../validations');
const {
    register,
    loginUser
}=require('../controllers/authController');
const authController=require('../controllers/authController');


router.post('/register',validate(authValidation.register),authController.register);
router.post('/login',validate(authValidation.login),authController.loginUser);

module.exports=router;


