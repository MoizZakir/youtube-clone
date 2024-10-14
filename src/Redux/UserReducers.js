import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        ip: null,
        currentUser:null,
        isFetching: false,
        error: false,
        isLogging: false,
    }
    ,
    reducers: {
        registerStart: (state) => {
            state.isFetching = true
        },
        registerSuccess: (state,action) => {
            state.isFetching = false
            state.currentUser = action.payload
            state.isLogging =true
        },
        registerFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
         IpFetch: (state,action) => {
         state.ip=action.payload
            
        },
         Follow: (state,action) => {
         state.currentUser={
            ...state.currentUser,
            following:[...state.currentUser.following,action.payload]
         }
            
        },
        UnFollow: (state,action) => {
            state.currentUser={
               ...state.currentUser,
               following:state.currentUser.following.filter((e)=>e!=action.payload)
            }
               
           },
        
        logout:(state,action)=>{
            state.currentUser = null
            state.isLogging = false
        }
    }
})
export const { registerStart,IpFetch, registerSuccess, registerFailure,logout,Follow,UnFollow } = userSlice.actions

export default userSlice.reducer