import { createSlice } from "@reduxjs/toolkit";



const initialState = JSON.parse(localStorage.getItem('otherUsers')) || [];

const  otherUserSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        setOtherUser:(state,action)=>{
            state.push = action.payload;
            localStorage.setItem("otherUsers", JSON.stringify(action.payload));
        },
    }
})

export const {setOtherUser}=otherUserSlice.actions;
export default  otherUserSlice.reducer;