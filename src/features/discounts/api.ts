// api for Discount

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Discount } from '@/types/types';

export const discountsApi = createApi({
    reducerPath: 'discountsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/discounts` }),
    endpoints: (builder) => ({
        getDiscounts: builder.query<Discount[], void>({
            query: () => '/',
        }),
    }),
});

export const { useGetDiscountsQuery } = discountsApi;