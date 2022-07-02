import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addCategory = createAsyncThunk('categories/addCategory', (categoryObj) => {
    console.log(categoryObj)
    return fetch('/categories', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoryObj)
    })
    .then(res => res.json())
    .then(data => data)
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        errors: [],
        status: "idle"
    },
    reducers: {
        initCategories(state, action) {
            state.categories = action.payload
        },
    },
    extraReducers: {
        [addCategory.pending](state) {
            state.status = "loading"
        },
        [addCategory.fulfilled](state, action) {
            if(!action.payload.error && !action.payload.errors){
                state.categories.push(action.payload);
                state.status = "idle";
                state.errors = [];
            } else {
                console.log("returned from fetch: ", action.payload)
                state.errors = action.payload.errors;
            }  
        },
    }
});

export const { initCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;