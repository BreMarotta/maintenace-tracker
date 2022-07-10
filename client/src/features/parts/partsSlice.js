import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addPart = createAsyncThunk('parts/addPart', (partObj) => {
    return fetch('/parts', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(partObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updatePart = createAsyncThunk('parts/updatePart', (partObj) => {
    return fetch(`/parts/${partObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(partObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const deletePart = createAsyncThunk('parts/deletePart', (partObj) => {
    return fetch(`/parts/${partObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(partObj)
    })
    .then(res => res.json())
})

const partsSlice = createSlice({
    name: "parts",
    initialState: {
        parts: [],
        errors: [],
        status: "idle"
    },
    reducers: {
        initParts(state, action) {
            console.log(action.payload)
            state.parts = action.payload
        },
        deletePartFront(state, action) {
            const index = state.parts.findIndex(i => i.id === action.payload);
            state.items.splice(index, 1);
        },
        logoutParts(state){
            state.parts = []
        }
    },
    extraReducers: {
        [addPart.pending](state) {
            state.status = "loading"
        },
        [addPart.fulfilled](state, action) {
            if(!action.payload.error && !action.payload.errors) {
                state.parts.push(action.payload);
                state.status = "idle";
                state.errors = [];
            } else {
                state.errors = action.payload.errors;
                state.status = "idle";
              
            }
        },
        [updatePart.pending](state) {
            state.status = "loading"
        },
        [updatePart.fulfilled](state, action) {
            if (!action.payload.errors && !action.payload.error) {
                const updatedParts = state.parts.map(p => p.id === action.payload.id ? action.payload : p)
                state.parts = updatedParts 
                state.status = "idle"
            } else {
                state.errors = action.payload.errors;
                state.status = "idle";
              
            }
        },
        [deletePart.pending](state){
            state.status = "loading"
        },
        [deletePart.fulfilled](state, action){

        }
    }
});

export const { initParts, deletePartFront, logoutParts } = partsSlice.actions;

export default partsSlice.reducer;