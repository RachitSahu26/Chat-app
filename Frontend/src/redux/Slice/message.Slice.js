import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "messagesData",
    initialState: {
        message: null,
    },
    reducers: {
        storedMessageData(state, action) {
            state.message = action.payload
        }
    }
})
export const {storedMessageData } = messageSlice.actions;
export default messageSlice.reducer;