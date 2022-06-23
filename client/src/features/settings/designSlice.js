import { createSlice } from '@reduxjs/toolkit'

const designSlice = createSlice({
    name: "design",
    initialState: {
        entities: [],
    },
    reducers: {
        designUpdated(state, action) {

        },
    },
});

export const { designUpdated } = designSlice.actions;

export default designSlice.reducer;