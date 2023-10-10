const express=require('express');
const router=express.Router();
const auth= require('../middlewares/auth');
const { getJob } = require('../controllers/jobsController');
const validateAuthentication=require('../middlewares/auth');

router.use(auth.validateAuthentication);
router.get('/:id',getJob);
module.exports=router;