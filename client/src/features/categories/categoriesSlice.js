import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: [],
    },
    reducers: {
        categoryAdded(state, action) {
            state.entities.push({
                ...action.payload
            });
        },
        categoryUpdated(state, action) {

        },
    },
});

export const { categoryAdded, categoryUpdated } = categoriesSlice.actions;

export default categoriesSlice.reducer;