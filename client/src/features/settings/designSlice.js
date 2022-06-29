import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components';

// const Global = createGlobalStyle`

// `

export const designBase = createAsyncThunk('design/base', () => {
    return fetch('/designs')
    .then(res => res.json())
    .then(data => data)
})

// export const designCreate = createAsyncThunk('design/create', (designObj) => {
//     return fetch('/designs', {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(designObj)
//     })
//     .then(res => res.json())
//     .then(data => data)
// })

export const designUpdate = createAsyncThunk('design/update', (designObj) => {
    return fetch('/designs/1', {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(designObj)
    })
    .then(res => res.json())
    .then(data => data)
})


const designSlice = createSlice({
    name: "design",
    initialState: {
        design: [],
        errors: [],
        status: []
    },
    reducers: {
        // designUpdated(state, action) {
        //     // console.log(action.payload)
        //     state.entities.push(action.payload)
        // },
        // designSaved(state, action){
        //     state.entities.push(action.payload)
        //     console.log(state)
        // },

    },
    extraReducers: {
        [designBase.pending](state) {
            state.status = "loading"
        },
        [designBase.fulfilled](state, action) {
            if(!action.payload.errors) {
                state.design = action.payload;
                state.status = "idle";
                state.errors = [];
            }else{
                console.log("returned from fetch: ", action.payload)
                // state.errors = action.payload.error;
            }
        },
        // [designCreate.pending](state) {
        //     state.status = "loading";
        // }, 
        // [designCreate.fulfilled](state, action) {
        //     if(!action.payload.error) {
        //         state.design = action.payload;
        //         state.status = "idle";
        //         state.errors = [];
        //     }else{
        //         console.log("returned from fetch: ", action.payload)
        //         // state.errors = action.payload.error;
        //     }
        // },
        [designUpdate.pending](state) {
            state.status = "loading"
        },
        [designUpdate.fulfilled](state, action) {
            if(!action.payload.error) {
                console.log(action.payload)
                state.design = action.payload;
                state.status = "idle";
                state.errors = [];
            }else{
                console.log("errors from fetch: ", action.payload)
                // state.errors = action.payload.error;
            }
        }
    },
});

export const { designAdded, designUpdated, designSaved, GlobalStyles } = designSlice.actions;

export default designSlice.reducer;