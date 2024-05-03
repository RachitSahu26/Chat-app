import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";
import userReducer from "./Slice/Auth.slice"
import otherUserSlice from "./Slice/otherUser.slice";
const store = configureStore({
    reducer: {
        auth: userReducer,
        users:otherUserSlice,
    },
    devTools: true
})
export default store