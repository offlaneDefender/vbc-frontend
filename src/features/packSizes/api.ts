// api for PackSize

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PackSize } from '@/types/types';

export const packSizesApi = createApi({
    reducerPath: 'packSizesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/packSizes` }),
    endpoints: (builder) => ({
        getPackSizes: builder.query<PackSize[], void>({
            query: () => '/',
        }),
    }),
});

export const { useGetPackSizesQuery } = packSizesApi;