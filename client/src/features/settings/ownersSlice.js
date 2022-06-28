import { createSlice } from '@reduxjs/toolkit'

const ownersSlice = createSlice({
    name: "owners",
    initialState: {
        entities: [],
    },
    reducers: {

    },
    asyncReducers: {
        signup(state, action) {
            state.entities.push({...action.payload});
        },
        login(state, action) {

        },
        logout(state, action) {

        }
    }
});

export const { signup, login, logout } = ownersSlice.actions;

export default ownersSlice.reducer;