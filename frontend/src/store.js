import { configureStore } from '@reduxjs/toolkit'
import { apiSplice } from './slices/apiSlices.js'
import cartSliceReducer from './slices/cartSlice.js'


const store = configureStore({
        reducer: {
            [apiSplice.reducerPath]: apiSplice.reducer,
            cart: cartSliceReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(apiSplice.middleware),
        devTools: true,
    });

export default store;