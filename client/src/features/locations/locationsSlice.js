import { createSlice } from "@reduxjs/toolkit"

const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        entities: [],
    },
    reducers: {
        locationAdded(state, action) {
            state.entities.push({...action.payload
            });
        },
        locationRemoved(state, action) {
            const index = state.entities.findIndex(r => r.id === action.payload);
            state.entities.splice(index, 1);
        },
    },
});

export const { locationAdded, locationRemoved } = locationsSlice.actions;

export default locationsSlice.reducer;