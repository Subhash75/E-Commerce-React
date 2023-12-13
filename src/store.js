import { configureStore } from '@reduxjs/toolkit';
import { eCommerceApi } from 'api';

const store = configureStore({
    reducer: {
        [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eCommerceApi.middleware),
})

export default store