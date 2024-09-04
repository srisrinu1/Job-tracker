const express=require('express');
const authRoute=require('./auth');
const testRoute=require('./test');
const app=express();
const router = express.Router();

const defaultRoutes=[
    {
        path:'/api/auth',
        method:'GET',
        route:authRoute
        
    },
    {
        path:'/api/test',
        method:'POST',
        route:testRoute
    }
   
]



defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });

module.exports=router;