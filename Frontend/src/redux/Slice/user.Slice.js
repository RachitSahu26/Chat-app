// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authdata: null,
  otherUserData: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeAuthData(state, action) {
      state.authdata = action.payload;
      localStorage.setItem('authdata', JSON.stringify(action.payload));
    },

    storeOtherUserData(state, action) {
      state.otherUserData = action.payload.data;
      console.log("data of the redux store",action.payload.data);
      localStorage.setItem('otherUserData', JSON.stringify(action.payload.data));
    },
  },
});

export const { storeAuthData, storeOtherUserData } = userSlice.actions;
export default userSlice.reducer;
