import { createSlice } from '@reduxjs/toolkit'

const designSlice = createSlice({
    name: "design",
    initialState: {
        entities: [],
    },
    reducers: {
        designAdded(state, action) {

        },
        designUpdated(state, action) {

        },
    },
});

export const { designAdded, designUpdated } = designSlice.actions;

export default designSlice.reducer;