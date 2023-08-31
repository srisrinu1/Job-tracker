const express=require('express');
const router=express.Router();
const validateUser=require('../middlewares/validators/userValidator');
const {
    register
}=require('../controllers/authController');

router.post('/register',validateUser,register);

module.exports=router;


