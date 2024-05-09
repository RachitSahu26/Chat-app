import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";


import userSlice from "./Slice/user.Slice";
import messageSlice from "./Slice/message.Slice";

const store = configureStore({
    reducer: {
        user: userSlice,
        messages: messageSlice
    },
    devTools: true
})
export default store