import { createSlice } from "@reduxjs/toolkit";

const repairsSlice = createSlice({
    name: "repairs",
    initialState: {
        entities: [],
    },
    reducers: {
        repairAdded(state, action) {
            state.entities.push({
                ...action.payload
            });
        },
        // repairUpdated(state, action) {
        //     const index = state.entities.findIndex(r => r.id === action.payload.id);
        // }
    },
    
});

export const { repairAdded } =repairsSlice.actions;

export default repairsSlice.reducer;