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
            } else {
                console.log(action.payload.errors)
                console.log(action.payload.error)
                state.errors = action.payload.errors;
                state.status = "idle";
            }
        }
    }
});

export const { initRepairs, logoutRepairs } = repairsSlice.actions;

export default repairsSlice.reducer;