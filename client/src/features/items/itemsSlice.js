import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const addItem = createAsyncThunk('items/addItem', (itemObj) => {
    return fetch('/items', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(itemObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updateItem = createAsyncThunk('items/updateItem', (itemObj) => {
    return fetch(`/items/${itemObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(itemObj)
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
            state.status = "loading"
        },
        [addItem.fulfilled](state, action){
            if(!action.payload.error && !action.payload.errors) {
                state.items.push(action.payload);
                state.status = "idle";
                state.errors = [];
            } else if (action.payload.error){
                state.errors = ['Category must exist'];
                state.status = "idle";
            } else {
                state.errors = action.payload.errors;
                state.status = "idle";
              
            }
        },
        [updateItem.pending](state) {
            state.status = "loading"
        },
        [updateItem.fulfilled](state, action) {
            if (!action.payload.errors && !action.payload.error) {
                const updatedItems = state.items.map(i => i.id === action.payload.id ? action.payload : i)
                state.items = updatedItems 
                state.status = "idle"
            } else if (action.payload.error){
                state.errors = ['Category must exist'];
                state.status = "idle";
            } else {
                state.errors = action.payload.errors;
                state.status = "idle";
              
            }
        },
    }
});

export const { initItems } = itemsSlice.actions;

export default itemsSlice.reducer;