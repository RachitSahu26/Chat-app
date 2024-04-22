import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";
import userReducer from "./Slice/Auth.slice"
const store = configureStore({
    reducer: {
        auth: userReducer,

    },
    devTools: true
})
export default store