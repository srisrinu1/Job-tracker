import axios from 'axios';
import { getTokenFromCookie } from '../cookie-handler';

const Fetch=axios.create(
    {
        baseURL:'https://concerned-slug-top-hat.cyclic.cloud/'
    }
)

Fetch.interceptors.use=(config)=>{
 const token= getTokenFromCookie();
 if(token){
    config.headers['Authorization']=`Bearer ${token}`
 }
 return config;

}

