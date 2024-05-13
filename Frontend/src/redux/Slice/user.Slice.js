// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load initial state from local storage or initialize it as null
const initialState = JSON.parse(localStorage.getItem('reduxState')) || {
  authdata: null,
  otherUserData: null,
  selectedUser: null,
  onlineUser: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeAuthData(state, action) {
      state.authdata = action.payload;
      localStorage.setItem('reduxState', JSON.stringify(state));
    },

    storeOtherUserData(state, action) {
      state.otherUserData = action.payload.data;
      localStorage.setItem('reduxState', JSON.stringify(state));
    },
    storeSelectedUser(state, action) {
      state.selectedUser = action.payload;
      localStorage.setItem('reduxState', JSON.stringify(state));
    },
    storeOnlineUser(state, action) {
      state.onlineUser = action.payload;
      localStorage.setItem('reduxState', JSON.stringify(state));
    },
    clearUserData(state) {
      state.authdata = null;
      state.otherUserData = null;
      state.selectedUser = null;
      state.onlineUser = [];
      // Clear user data from local storage
    },
  },
});

export const { storeAuthData, storeOtherUserData, storeSelectedUser, storeOnlineUser,clearUserData } = userSlice.actions;
export default userSlice.reducer;
