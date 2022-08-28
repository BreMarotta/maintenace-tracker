import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addRepair = createAsyncThunk('repairs/addRepair', (repairObj) => {
    return fetch('/api/repairs', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(repairObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updateRepair = createAsyncThunk('repairs/updateRepair', (repairObj) => {
    return fetch(`/api/repairs/${repairObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(repairObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const deleteRepair = createAsyncThunk('/repairs/deleteRepair', (repairObj) => {
    return fetch(`/api/repairs/${repairObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(repairObj)
    })
    .then(res => res.json())
})

const repairsSlice = createSlice({
    name: "repairs",
    initialState: {
        repairs: [],
        errors: [],
        status: "idle"
    },
    reducers: {
        initRepairs(state, action) {
            state.repairs = action.payload
        },
        logoutRepairs(state){
            state.repairs = []
        },
        deleteRepFront(state, action){
            const index = state.repairs.findIndex(r => r.id === action.payload.id);
            state.repairs.splice(index, 1);
        }
    },
    extraReducers: {
        [addRepair.pending](state){
            state.status = "loading"
        },
        [addRepair.fulfilled](state, action){
            if(!action.payload.error && !action.payload.errors) {
                state.repairs.push(action.payload);
                state.status = "idle";
                state.errors =[];
            } else if (action.payload.error){
                console.log(action.payload.error)
                state.errors = action.payload.error;
                state.status = "idle";
            } else if (action.payload.errors){
                console.log(action.payload.errors)
                state.errors = action.payload.errors;
                state.status = "idle"
            }
        },
        [updateRepair.pending](state){
            state.status = "loading"
        },
        [updateRepair.fulfilled](state, action){
            console.log(action.payload)
            if(!action.payload.errors && !action.payload.error){
                const updatedRepairs = state.repairs.map(r => r.id === action.payload.id ? action.payload : r)
                state.repairs = updatedRepairs
                state.status = "idle"
                state.errors = []
            } else {
                state.errors = action.payload.errors
                state.status = "idle"
            }
        },
        [deleteRepair.pending](state){
            state.status = "loading"
        },
        [deleteRepair.fulfilled](state, action){
            console.log("returned from Fecth: ", action.payload)
            if(action.payload.errors || action.payload.error){
                state.errors.push(action.payload.errors)
                state.status = "idle"
            }
        }
    }
});

export const { initRepairs, logoutRepairs, deleteRepFront } = repairsSlice.actions;

export default repairsSlice.reducer;