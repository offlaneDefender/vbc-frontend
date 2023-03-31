// RTKQuery api file for contracts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Contract } from '@/types/types';

export const contractsApi = createApi({
    reducerPath: 'contractsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/contracts` }),
    endpoints: (builder) => ({
        getContracts: builder.query<Contract[], void>({
            query: () => '/',
        }),
        getContract: builder.query<Contract, string>({
            query: (id) => `/${id}`,
        }),
        createContract: builder.mutation<Contract, Contract>({
            query: (contract) => ({
                url: '/',
                method: 'POST',
                body: contract,
            })
        }),
        updateContract: builder.mutation<Contract, Contract>({
            query: (contract) => ({
                url: `/${contract._id}`,
                method: 'PUT',
                body: contract,
            }),
        }),
        deleteContract: builder.mutation<Contract, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            })
        })
    }),
})

export const { useGetContractsQuery, useCreateContractMutation,
    useGetContractQuery, useUpdateContractMutation,
    useDeleteContractMutation } = contractsApi