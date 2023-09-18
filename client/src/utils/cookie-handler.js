import Cookies from 'js-cookie';
export const getTokenFromCookie=()=>{
 const result=Cookies.get("token");
 const token=result?result:null;
 return token;
}

export const addToken=(token)=>{
  Cookies.set('token',token,{expires:2})
}
