import { configureStore } from "@reduxjs/toolkit";
import { config } from "dotenv";

import otherUserSlice from "./Slice/otherUser.slice";
import authSlice from "./Slice/authSlice";

const store = configureStore({
    reducer: {
        auth:authSlice  ,
        users:otherUserSlice,
    },
    devTools: true
})
export default store