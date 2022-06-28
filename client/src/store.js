import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { ownerApi } from "./features/settings/API";
import categoriesReducer from "./features/categories/categoriesSlice";
import designSlice from "./features/settings/designSlice";
import itemsReducer from './features/items/itemsSlice';
import locationsReducer from './features/locations/locationsSlice';
import ownersReducer from "./features/settings/ownersSlice";
import peopleReducer from "./features/settings/peopleSlice";
import repairsReducer from './features/repairs/repairsSlice';


export const store = configureStore({
    reducer: {
        // categories: categoriesReducer,
        // design: designSlice,
        // items: itemsReducer,
        // locations: locationsReducer,
        // owners: ownersReducer,
        // people: peopleReducer,
        // repairs: repairsReducer,
        [ownerApi.reducerPath]: ownerApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ownerApi.middleware),
});

setupListeners(store.dispatch)