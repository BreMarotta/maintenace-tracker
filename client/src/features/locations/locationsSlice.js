import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addLocation = createAsyncThunk('/locations/addLocation', (locationObj) => {
    return fetch('/locations', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(locationObj)
    })
    .then(res => res.json())
    .then(data => data)
} )

export const updateLocation = createAsyncThunk('/locations/updateLocation', (locationObj) => {
    return fetch(`/locations/${locationObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(locationObj)
    })
    .then(res => res.json())
    .then(data => data)
})
const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [],
        errors: [],
        status: "idle",
    },
    reducers: {
        initLocations(state, action) {
            state.locations = action.payload
        },
        updateLocationFront(state, action) {
            console.log(action.payload)   
        },
        logoutLocations(state){
            state.locations = []
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
                //Need to figure this out still 
            }
        }
    }
});

export const { initLocations, addLocationFront, logoutLocations } = locationsSlice.actions;

export default locationsSlice.reducer;