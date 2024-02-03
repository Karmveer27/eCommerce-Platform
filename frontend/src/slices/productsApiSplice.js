import { PRODUCTS_URL } from "../constants.js";
import { apiSplice } from "./apiSlices.js";

export const productsApiSplice = apiSplice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            })
        }),
        keepUnusedDataFor: 5,
    })
})

export const { useGetProductsQuery } = productsApiSplice;
