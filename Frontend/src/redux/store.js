import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";


import userSlice from "./Slice/user.Slice";
import messageSlice from "./Slice/message.Slice";
import socketSlice from "./Slice/socket.Slice";

const store = configureStore({
    reducer: {
        user: userSlice,
        messages: messageSlice,
        socket: socketSlice,
    },
    devTools: true
})
export default store