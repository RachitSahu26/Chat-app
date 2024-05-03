import { createSlice } from "@reduxjs/toolkit";




const  otherUserSlice= createSlice({
    name:"user",
    initialState:{
        otherUser:null
    },
    reducers:{
        setOtherUser:(state,action)=>{
            state.otherUser = action.payload;
        },
    }
})

export const {setOtherUser}=otherUserSlice.actions;
export default  otherUserSlice.reducer;