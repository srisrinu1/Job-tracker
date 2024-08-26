const express=require('express');
const authRoute=require('./auth');
const app=express();
const router = express.Router();

const defaultRoutes=[
    {
        path:'/api/auth',
        method:'GET',
        route:authRoute
        
    }
]



defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

module.exports=router;