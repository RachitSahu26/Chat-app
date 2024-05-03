// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('authData')) || [];



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeApiData(state, action) {
      state.push=action.payload
      localStorage.setItem('authData', JSON.stringify(action.payload));
    },
  },
});

export const { storeApiData } = authSlice.actions;
export default authSlice.reducer;
