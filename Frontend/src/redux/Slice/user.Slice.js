// / apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load authdata from localStorage or initialize it as null
const initialAuthData = JSON.parse(localStorage.getItem('authdata')) || null;

const initialState = {
  authdata: initialAuthData,
  otherUserData: null,
  selectedUser: null,
  onlineUser:null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeAuthData(state, action) {
      state.authdata = action.payload;
      // console.log(" Auth  data of the redux store", action.payload);
      localStorage.setItem('authdata', JSON.stringify(action.payload));
    },

    storeOtherUserData(state, action) {
      state.otherUserData = action.payload.data;
      localStorage.setItem('otherUserData', JSON.stringify(action.payload.data));
    },
    storeSelectedUser(state, action) {
      state.selectedUser = action.payload;
      // console.log("stored selectd user data",action.payload);
    },
    storeOnlineUser(state,action){
      state.onlineUser=action.payload;

    }
  },
});

export const { storeAuthData, storeOtherUserData,storeSelectedUser,storeOnlineUser } = userSlice.actions;
export default userSlice.reducer;