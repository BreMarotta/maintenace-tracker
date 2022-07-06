import { createSlice } from '@reduxjs/toolkit';

const manageUsersSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        errors: [],
        status: "idle",
        loggedin: "false"
    },
    reducers: {
        initUser(state, action) {
            console.log(action.payload)
            state.loggedin = "true";
            state.user = action.payload
        },
        logoutUser(state, action) {
            state.loggedin = "false";
            state.user = []
        }
    },
});

export const { initUser } = manageUsersSlice.actions;

export default manageUsersSlice.reducer;