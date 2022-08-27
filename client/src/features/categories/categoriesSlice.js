import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const addCategory = createAsyncThunk('categories/addCategory', (categoryObj) => {
    return fetch('/api/categories', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoryObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const updateCategory = createAsyncThunk('categories/updateCategory', (categoryObj) => {
    return fetch(`/api/categories/${categoryObj.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoryObj)
    })
    .then(res => res.json())
    .then(data => data)
})

export const deleteCategory = createAsyncThunk('categories/deleteCategory', (categoryObj) => {
    return fetch(`/api/categories/${categoryObj.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoryObj)
    })
    .then(res => res.json())
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
        logoutCategories(state) {
            state.categories = []
        },
        deleteCatFront(state, action){
            const index = state.categories.findIndex(c => c.id === action.payload.id);
            state.categories.splice(index, 1);
        },
        clearCatErrors(state){
            state.errors = []
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
                const updatedCat = state.categories.map(c => c.id === action.payload.id ? action.payload : c)
                state.categories = updatedCat
                state.status = "idle"
                state.errors = []
            } else {
                state.errors = action.payload.errors
                state.status = "idle"
            }
        },
        [deleteCategory.pending](state) {
            state.status = "loading"
        },
        [deleteCategory.fulfilled](state, action) {
            if(action.payload.errors || action.payload.error){
                console.log(action.payload)
                state.errors.push(action.payload.errors)
                state.status = "idle"
            }
        }
    }
});

export const { initCategories, updateCategoryFront, logoutCategories, clearCatErrors, deleteCatFront } = categoriesSlice.actions;

export default categoriesSlice.reducer;