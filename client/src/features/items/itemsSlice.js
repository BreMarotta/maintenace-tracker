import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const addItem = createAsyncThunk('items/addItem', (itemObj) => {
    return fetch('/items', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.strinfigy(itemObj)
    })
    .then(res => res.json())
    .then(data => data)
})
const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        errors: [],
        status: "idle"
    },
    reducers: {
        initItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [addItem.pending](state) {

        },
        [addItem.fulfilled](state, action){
            console.log("Sent back after fetch: ", action.payload)
        },
    }
});

export const { initItems} = itemsSlice.actions;

export default itemsSlice.reducer;