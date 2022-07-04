import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addCategory = createAsyncThunk('categories/addCategory', (categoryObj) => {
    return fetch('/categories', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoryObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updateCategory = createAsyncThunk('categories/updateCategory', (categoryObj) => {
    return fetch(`/categories/${categoryObj.id}`, {
        method: "PATCH",
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
        updateCategoryFront(state, action) {
            console.log(action.payload)
        }
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
                state.status = "idle";
            }  
        },
        [updateCategory.pending](state) {
            state.status = "loading"
        },
        [updateCategory.fulfilled](state, action) {
            if(!action.payload.errors && !action.payload.error) {
                // Need to figure this out still
            }
        }
    }
});

export const { initCategories, updateCategoryFront } = categoriesSlice.actions;

export default categoriesSlice.reducer;