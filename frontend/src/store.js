import { configureStore } from '@reduxjs/toolkit'
import { apiSplice } from './slices/apiSlices.js'


const store = configureStore({
        reducer: {
            [apiSplice.reducerPath]: apiSplice.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSplice.middleware),
        devTools: true,
    });

export default store;