import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { clearErrors } from "../people/peopleSlice"

export const addLocation = createAsyncThunk('/locations/addLocation', (locationObj) => {
    return fetch('/api/locations', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(locationObj)
    })
    .then(res => res.json())
    .then(data => data)
} )

export const updateLocation = createAsyncThunk('/locations/updateLocation', (locationObj) => {
    return fetch(`/api/locations/${locationObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(locationObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const deleteLocation = createAsyncThunk(`/locations/deleteLocation`, (locationObj) => {
    return fetch(`/api/locations/${locationObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(locationObj)
    })
    .then(res => res.json())
})
const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [],
        errors: [],
        status: "idle",
        one: []
    },
    reducers: {
        initLocations(state, action) {
            state.locations = action.payload
        },
        logoutLocations(state){
            state.locations = []
        },
        deleteLocFront(state, action){
            const index = state.locations.findIndex(l => l.id === action.payload.id);
            state.locations.splice(index, 1);
        },
        clearLocErrors(state){
            state.errors = []
        }
        },
    extraReducers: {
        [addLocation.pending](state){
            state.status = "loacing"
        },
        [addLocation.fulfilled](state, action) {
            if(!action.payload.error && !action.payload.errors){
                state.locations.push(action.payload);
                state.status = "idle";
                state.errors = [];
            } else {
                console.log("returned from fetch: ", action.payload)
                state.errors = action.payload.errors;
            
            }
        },
        [updateLocation.pending](state) {
            state.status = "loading"
        },
        [updateLocation.fulfilled](state, action) {
            if(!action.payload.errors && !action.payload.error) {
                const updatedLoc = state.locations.map(l => l.id === action.payload.id ? action.payload : l)
                state.locations = updatedLoc 
                state.status = "idle"
                state.errors = []
            } else {
                state.errors = action.payload.errors
                state.status = "idle"
            }
        },
        [deleteLocation.pending](state) {
            state.status = "loading"
        },
        [deleteLocation.fulfilled](state, action) {
            if (action.payload.errors || action.payload.error){
                console.log(action.payload)
                state.errors.push(action.payload.errors) 
                state.status = "idle"
            } 
        }
    }
});

export const { initLocations, logoutLocations, clearLocErrors, deleteLocFront } = locationsSlice.actions;

export default locationsSlice.reducer;