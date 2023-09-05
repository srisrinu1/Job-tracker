const express=require('express');
const router=express.Router();
const auth= require('../middlewares/auth');
const { getJob } = require('../controllers/jobsController');

router.get('/:id',getJob);
module.exports=router;