// RTK Query API file for MedicinalProduct

import { ProductPrice } from '@/types/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pricesApi = createApi({
    reducerPath: 'pricesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/prices` }),
    endpoints: (builder) => ({
        getProductPrices: builder.query<ProductPrice[], void>({
            query: () => '/',
        }),
    }),
})

export const { useGetProductPricesQuery } = pricesApi