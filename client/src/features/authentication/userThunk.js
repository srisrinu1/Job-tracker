import Fetch from '../../utils/axios/interceptors';

export const registerUserThunk=async(url,user,thunkAPI)=>{
   try{
    const resp=await Fetch.post(url,user);
    return resp.data;
   }
   catch(error){
      return thunkAPI.rejectWithValue(error.response.data.message)
   }
}

export const loginUserThunk=async(url,user,thunkAPI)=>{
    try{
        const resp=await Fetch.post(url,user);
        return resp.data;
    }
    catch(error){
       return thunkAPI.rejectWithValue(error.response.data.message)
    }
}