import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getMe = createAsyncThunk('owners/getMe', () => {
    return fetch('/me')
    .then((res) => res.json())
    .then((data) => data)
})

export const logIn = createAsyncThunk('owners/login', (userObj) => {
    return fetch('/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const logOut = createAsyncThunk('owners/logout', () => {
    return fetch('/logout', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then((res) => res.json())
    .then(d => d)
})

const ownersSlice = createSlice({
    name: "owners",
    initialState: {
        user: [],
        error: [],
        status: "idle",
        loggedin: "false"
    },
    reducers: {
        setUser(state, action) {
            state.user.push(action.payload);
        },
        logout(state) {
            console.log("Logged Out")
            state.user = [];
            state.loggedin = "false"
        },
        login(state, action) {
            console.log(action.payload)
        }
    },
    extraReducers: {
        [getMe.pending](state) {
            state.status = "loading";
        },
        [getMe.fulfilled](state, action) {
            state.user = action.payload;
            state.status = "idle";
        },
        [logIn.pending](state) {
            state.status = "loading";
        },
        [logIn.fulfilled](state, action) {
            console.log(action.payload)
            state.user = action.payload;
            state.status = "idle";
            state.loggedin = "true"
        },
        [logOut.pending](state) {
            state.status = "loading";
        },
        [logOut.fulfilled](state) {
            state.user = [];
            state.status = "idle";
            state.loggedin = "false"
        }
        // setMe(state, action){
        //     state.user= ({action.payload, loggedin: true})
        //     console.log("payload:", action.payload)
        //     console.log("State from Slice:", state.user)
        // },
        // // signup(state, action) {
        // //     state.owner.push({...action.payload});
        // // },
        // // login(state, action) {

        // // },
        // logout(state, action) {
        //     state.user= [];
        //     console.log(action.payload, state.user)
        // }
    },
});

export const { setMe, signup, login, logout } = ownersSlice.actions;

export default ownersSlice.reducer;