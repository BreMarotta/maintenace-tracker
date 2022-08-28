import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addPerson = createAsyncThunk('people/addPerson', (personObj) => {
    return fetch('/api/people', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(personObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updatePerson = createAsyncThunk('people/updatePerson', (personObj) => {
    return fetch(`/api/people/${personObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(personObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const deletePerson = createAsyncThunk(`/people/deleterPerson`, (personObj) => {
    return fetch(`/api/people/${personObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(personObj)
    })
    .then(res => res.json())
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
            state.people = action.payload
        },
        logoutPeople(state){
            state.people = []
        },
        clearErrors(state){
            state.errors = []
        },
        deletePerFront(state, action){
            const index = state.people.findIndex(p => p.id === action.payload.id);
            state.people.splice(index, 1);
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
                state.errors = action.payload.errors
                state.status = "idle"   
            }
        },
        [updatePerson.pending](state) {
            state.status = "loading"
        },
        [updatePerson.fulfilled](state, action) {
            if (!action.payload.errors && !action.payload.error) {
                const updatedPeople = state.people.map(p => p.id === action.payload.id ? action.payload : p)
                state.people = updatedPeople
                state.status = "idle"
                state.errors = []
            } else {
                state.errors = action.payload.errors
                state.status = "idle"
            }
        },
        [deletePerson.pending](state){
            state.status = "loading"
        },
        [deletePerson.fulfilled](state, action) {
            if(action.payload.errors || action.payload.error){
                console.log(action.payload)
                state.errors.push(action.payload.errors)
                state.status = "idle"
            }
        }
    }
});

export const { initPeople, logoutPeople, clearErrors, deletePerFront } = peopleSlice.actions;

export default peopleSlice.reducer;