import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        authUser: null // Assuming authUser starts as null
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
            // Save authUser to local storage
            localStorage.setItem("authUser", JSON.stringify(action.payload));
        },
        clearAuthUser: (state) => {
            state.authUser = null;
            // Clear authUser from local storage
            localStorage.removeItem("authUser");
        }
    }
});

export const { setAuthUser, clearAuthUser } = userSlice.actions;
export default userSlice.reducer;