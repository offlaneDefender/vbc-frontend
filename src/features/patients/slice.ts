/**
 * ReduxToolkit slice for patients with RTK Query
 */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { Patient } from '@/types/types'

// Define a type for the slice state
interface PatientsState {
    patients: Patient[],
    loading: boolean,
    error: string | null,
    formPatient: Patient | null,
}

// Define the initial state using that type
const initialState: PatientsState = {
    patients: [],
    loading: false,
    error: null,
    formPatient: null,
}

export const patientsSlice = createSlice({
    name: 'patients',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setPatients: (state, action: PayloadAction<Patient[]>) => {
            state.patients = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        setFormPatient: (state, action: PayloadAction<Patient | null>) => {
            state.formPatient = action.payload
        },
    },
})

export const PatientsActions = patientsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPatientsState = (state: RootState) => state.patients;

export default patientsSlice.reducer