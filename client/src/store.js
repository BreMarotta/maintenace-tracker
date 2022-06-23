import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./features/categories/categoriesSlice";
import designSlice from "./features/settings/designSlice";
import itemsReducer from './features/items/itemsSlice';
import locationsReducer from './features/locations/locationsSlice';
import ownersReducer from "./features/settings/ownersSlice";
import peopleReducer from "./features/settings/peopleSlice";
import repairsReducer from './features/repairs/repairsSlice';


const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        design: designSlice,
        items: itemsReducer,
        locations: locationsReducer,
        owners: ownersReducer,
        people: peopleReducer,
        repairs: repairsReducer,
        
    },
});

export default store;