// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Patient } from '@/types/types'
import parseError from '@/utils/parseError'

// Define a service using a base URL and expected endpoints
export const patientsApi = createApi({
    reducerPath: 'patientsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/patients` }),
    endpoints: (builder) => ({
        getPatients: builder.query<Patient[], void>({
            query: () => '/',
        }),
        getPatient: builder.query<Patient, string>({
            query: (id) => `/${id}`,
        }),
        createPatient: builder.mutation<Patient, Patient>({
            query: (patient) => ({
                url: '/',
                method: 'POST',
                body: patient,
            })
        }),
        updatePatient: builder.mutation<Patient, Patient>({
            query: (patient) => ({
                url: `/${patient._id}`,
                method: 'PUT',
                body: patient,
            }),
        }),
        deletePatient: builder.mutation<Patient, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPatientsQuery, useCreatePatientMutation,
    useGetPatientQuery, useUpdatePatientMutation,
    useDeletePatientMutation } = patientsApi