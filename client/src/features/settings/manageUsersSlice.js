import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initCategories } from '../categories/categoriesSlice'

export const getMe = createAsyncThunk('user/getMe', () => {
    return fetch('/me')
    .then((res) => res.json())
    .then((data) => data)
})

export const logIn = createAsyncThunk('user/login', (userObj) => {
    return fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const signUp = createAsyncThunk('user/signup', (userObj) => {
    return fetch('/signup', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const logOut = createAsyncThunk('user/logout', () => {
    return fetch('/logout', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then((res) => {})
})

export const updateUser = createAsyncThunk('user/updateUser', (settingsObj) => {
    return fetch(`/users`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(settingsObj)
    })
    .then(res => res.json())
    .then(data => data)
})

const manageUsersSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        errors: [],
        status: "idle",
        loggedin: "false"
    },
    reducers: {

    },
    extraReducers: {
        [getMe.pending](state) {
            state.status = "loading";
        },
        [getMe.fulfilled](state, action) {
            if (!action.payload.error && !action.payload.errors) {
                // console.log("Me from fetch: ", action.payload)
                // initCategories(action.payload.categories);
                state.user = action.payload;
                state.loggedin = "true";
                state.status = "idle";
            } else {
            state.status = "idle";
            state.loggedin = "false";
            state.user = []
        }
            
        },
        [logIn.pending](state) {
            state.status = "loading";
        },
        [logIn.fulfilled](state, action) {
            if (!action.payload.error) {
                console.log("after login: ", action.payload)
                state.user = action.payload
                state.loggedin = "true";
                state.errors = [];
            } else {
                state.errors = action.payload.error;
                state.loggedin = "false";
            }           
        },
        [signUp.pending](state) {
            state.status = "loading";
        },
        [signUp.fulfilled](state, action) {
            if(!action.payload.errors) {
                console.log("after signup: ", action.payload)
                state.user = action.payload
                state.status = "idle";
                state.loggedin = "true";
                state.errors = [];
            } else {
                state.errors = action.payload.errors;
                state.loggedin = "false";
            }
        },
        [logOut.pending](state) {
            state.status = "loading";
        },
        [logOut.fulfilled](state) {
            console.log("logged out")
            state.user = [];
            state.status = "idle";
            state.loggedin = "false";
        },
        [updateUser.pending](state) {
            state.status = "loading";
        },
        [updateUser.fulfilled](state, action) {
            if(!action.payload.errors && !action.payload.error) {
                console.log("after update: ", action.payload)
            } else {
                console.log("with errors: ", action.payload)
            }
        }
    },
});

// export const { setMe, signup, login, logout } = usersSlice.actions;

export default manageUsersSlice.reducer;