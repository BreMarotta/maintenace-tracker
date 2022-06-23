import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        entities: [],
    },
    reducers: {
        itemAdded(state, action) {

        },
        itemUpdated(state, action) {

        },
        itemRemoved(state, action) {

        },
    },
});

export const { itemAdded, itemUpdated, itemRemoved } = itemsSlice.actions;

export default itemsSlice.reducer;