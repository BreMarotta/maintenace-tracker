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
        // updatePersonFront(state, action) {
        //     const updatedPeople = state.people.map(p => p.id === action.payload.id ? action.payload : p)
        //     state.people = updatedPeople           
        // },
        logoutPeople(state){
            state.people = []
        },
        highlightPerson(state, action){
            const index = state.people.findIndex((people) => people.id === action.payload);
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
            
        }
    }
});

export const { initPeople, updatePersonFront, logoutPeople } = peopleSlice.actions;

export default peopleSlice.reducer;