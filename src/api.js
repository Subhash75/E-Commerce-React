import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eCommerceApi = createApi({
    reducerPath: "eCommerceApp",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "/products/categories",
        }),
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getProductByCategory: builder.query({
            queryFn: async (args, _, _extraOptions, fetchBaseQuery) => {
                const { categories = [] } = args

                const categoryPromises = categories.map(async categoryType => {
                    return await fetchBaseQuery(`/products/category/${categoryType}`)
                })
                return await Promise.allSettled(categoryPromises).then((results) => {
                    return { data: results?.map(result => result?.value?.data)?.flat()?.filter(Boolean) }
                })
            },
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetAllProductsQuery,
    useGetProductByCategoryQuery,
    useGetProductByIdQuery,
} = eCommerceApi;
