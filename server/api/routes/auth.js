const express=require('express');
const router=express.Router();
const validateUser=require('../middlewares/validators/userValidator');
const {
    register,
    loginUser
}=require('../controllers/authController');


router.post('/register',validateUser,register);
router.post('/login',loginUser)

module.exports=router;


