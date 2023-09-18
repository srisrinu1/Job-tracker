import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { addToken, getTokenFromCookie } from '../../utils/cookie-handler';
import { registerUserThunk,loginUserThunk } from './userThunk';

const initialState={
    isLoading:false,
    token:getTokenFromCookie(),
    error:""
}

const registerUser=createAsyncThunk('user/registerUser',async(user,thunkAPI)=>{
    return registerUserThunk('/api/users/register',user,thunkAPI)
});

const loginUser=createAsyncThunk('users/loginUser',async(user,thunkAPI)=>{
    return loginUserThunk('/api/users/login',user,thunkAPI)
})


const userSlice=createSlice({
   name:'user',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
     builder
           .addCase('registerUser/pending',(state,{payload})=>{
               state.isLoading=true
           })
           .addCase('registerUser/fulfilled',(state,{payload})=>{
                const {token}=payload;
                state.isLoading=false;
                state.token=token;
                addToken(token)
           })
           .addCase('registerUser/rejected',(state,{payload})=>{
                state.isLoading=false;
                state.error=payload;
           })
           .addCase('loginUser/pending',(state,{payload})=>{
            state.isLoading=true;
           })
           .addCase('loginUser/fullfilled',(state,{payload})=>{
             const {token}=payload;
             state.isLoading=false;
             state.token=token;
             addToken(token);
           })
           .addCase('loginUser/rejected',(state,{payload})=>{
            state.isLoading=false;
            state.error=payload;
           })
   }
});

export default userSlice.reducer;

