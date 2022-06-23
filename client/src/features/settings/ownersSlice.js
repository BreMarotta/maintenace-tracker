import { createSlice } from '@reduxjs/toolkit'

const ownersSlice = createSlice({
    name: "owners",
    initialState: {
        entities: [],
    },
    reducers: {
        ownerAdded(state, action) {
            state.entities.push({...action.payload});
        },
    },
});

export const { ownerAdded } = ownersSlice.actions;

export default ownersSlice.reducer;