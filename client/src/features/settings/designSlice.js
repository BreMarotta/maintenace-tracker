import { createSlice } from '@reduxjs/toolkit'

const designSlice = createSlice({
    name: "design",
    initialState: {
        entities: [],
    },
    reducers: {
        designUpdated(state, action) {
            state.entities.push(action.payload)
        },
        designSaved(state, action){
            state.entities.push(action.payload)
        },
    },
});

export const { designAdded, designUpdated, designSaved } = designSlice.actions;

export default designSlice.reducer;