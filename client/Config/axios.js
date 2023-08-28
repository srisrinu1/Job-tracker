import axios from 'axios';

const Fetch=axios.create({
    baseURL:process.env.BASE_URL
});

Fetch.interceptors.use((config)=>{

})