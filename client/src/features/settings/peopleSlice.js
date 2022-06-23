import { createSlice } from "@reduxjs/toolkit"

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        entities: [],
    },
    reducers: {
        personAdded(state, action){
            state.entities.push({...action.payload});
        },
        personUpdated(state, action) {

        },
        personDeleted(state, action) {
            const index = state.entities.findIndex(r => r.id === action.payload);
            state.entities.splice(index, 1);
        },
    },
});

export const { personAdded, personUpdated, personDeleted } = peopleSlice.actions;

export default peopleSlice.reducer;