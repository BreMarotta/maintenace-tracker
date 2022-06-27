import { createSlice } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

`


const designSlice = createSlice({
    name: "design",
    initialState: {
        entities: [],
    },
    reducers: {
        designUpdated(state, action) {
            // console.log(action.payload)
            state.entities.push(action.payload)
        },
        designSaved(state, action){
            state.entities.push(action.payload)
            console.log(state)
        },

    },
});

export const { designAdded, designUpdated, designSaved, GlobalStyles } = designSlice.actions;

export default designSlice.reducer;