import { configureStore } from '@reduxjs/toolkit';
import { eCommerceApi } from 'api';
import globalSlice from 'globalSlice.slice';

const store = configureStore({
    reducer: {
        globalSlice,
        [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eCommerceApi.middleware),
})

export default store