import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addPerson = createAsyncThunk('people/addPerson', (personObj) => {
    return fetch('/people', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(personObj)
    })
    .then(res => res.json())
    .then(data => data)
})
const peopleSlice = createSlice({
    name: "people",
    initialState: {
        people: [],
        errors: [],
        status: "idle"
    },
    reducers: {
        initPeople(state, action) {
            console.log("people in state: ", action.payload)
            state.people = action.payload
        }
    },
    extraReducers: {
        [addPerson.pending](state) {
            state.status = "loading"
        },
        [addPerson.fulfilled](state, action) {
            if(!action.payload.errors && !action.payload.error) {
                state.people.push(action.payload);
                state.status = "idle";
                state.errors = [];
            } else {
                console.log("returned from fetch: ", action.payload)
                
            }
            
        },
    }
});

export const { initPeople, personAdded, personUpdated, personDeleted } = peopleSlice.actions;

export default peopleSlice.reducer;