import axios from 'axios';
import dotenv from 'dotenv';
import { getTokenFromCookie } from '../cookie-handler';

dotenv.config();

const Fetch=axios.create(
    {
        baseURL:process.env.BASE_URL
    }
)

Fetch.interceptors.use=(config)=>{
 const token= getTokenFromCookie();
 if(token){
    config.headers['Authorization']=`Bearer ${token}`
 }
 return config;

}


