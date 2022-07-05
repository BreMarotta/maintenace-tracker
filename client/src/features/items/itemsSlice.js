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

export const deleteItem = createAsyncThunk('items/deleteItem', (itemObj) => {
    return fetch(`/items/${itemObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(itemObj)
    })
    .then(res => res.json())
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
        },
        deleteItemFront(state, action) {
            const index = state.items.findIndex(i => i.id === action.payload);
            state.items.splice(index, 1);
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
        [deleteItem.pending](state) {
            state.status = "loading"
        },
        [deleteItem.fulfilled](state, action) {

        }
    }
});

export const { initItems, deleteItemFront } = itemsSlice.actions;

export default itemsSlice.reducer;