// RTK Query API file for MedicinalProduct

import { BrandedProduct, MedicinalProduct } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/products` }),
    endpoints: (builder) => ({
        getMedicinalProducts: builder.query<MedicinalProduct[], void>({
            query: () => '/medicinal',
        }),
        getMedicinalProduct: builder.query<MedicinalProduct, string>({
            query: (id) => `/medicinalProducts/${id}`,
        }),
        getBrandedProducts: builder.query<BrandedProduct[], void>({
            query: () => '/branded',
        }),
        getBrandedProduct: builder.query<BrandedProduct, string>({
            query: (id) => `/brandedProducts/${id}`,
        }),
    }),
})

export const { useGetMedicinalProductsQuery, useGetMedicinalProductQuery, useGetBrandedProductQuery, useGetBrandedProductsQuery } = productApi