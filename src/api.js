import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eCommerceApi = createApi({
    reducerPath: 'eCommerceApp',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => '/products/categories',
        }),
    }),
})

export const { useGetAllCategoriesQuery } = eCommerceApi