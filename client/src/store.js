import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categories/categoriesSlice";
import designSlice from "./features/designs/designSlice";
import itemsReducer from './features/items/itemsSlice';
import locationsReducer from './features/locations/locationsSlice';
import manageUsersReducer from "./features/settings/manageUsersSlice";
import peopleReducer from "./features/people/peopleSlice";
import repairsReducer from './features/repairs/repairsSlice';


export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        design: designSlice,
        items: itemsReducer,
        locations: locationsReducer,
        users: manageUsersReducer,
        people: peopleReducer,
        repairs: repairsReducer,       
    },
});

export default store;