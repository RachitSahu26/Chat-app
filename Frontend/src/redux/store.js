import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";


import  userSlice from "./Slice/user.Slice";

const store = configureStore({
    reducer: {
        user:userSlice,

    },
    devTools: true
})
export default store