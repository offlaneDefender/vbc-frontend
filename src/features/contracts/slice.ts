// RTK slice for contracts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import type { Contract } from '@/types/types';

// Define a type for the slice state
interface ContractsState {
    contracts: Contract[];
    contract: Contract;
    loading: boolean;
    error: string;
}

// Define the initial state using that type
const initialState: ContractsState = {
    contracts: [],
    contract: {
        _id: '',
        patient: {
            _id: '',
            name: '',
            age: 0,
            stage: 1,
            pfs: 0,
            os: 0,
        },
        product: {
            _id: '',
            name: '',
            prices: [{
                _id: '',
                price: 0,
                packSize: {
                    _id: '',
                    name: '',
                    size: 0,
                }
            }]
        },
        packSize: {
            _id: '',
            name: '',
            size: 0,
        },
        discount: {
            _id: '',
            value: 0,
        },
        totalValue: 0,
        startDate: new Date().toString(),
        notes: '',
    },
    loading: false,
    error: '',
}

export const contractsSlice = createSlice({
    name: 'contracts',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setContracts: (state, action: PayloadAction<Contract[]>) => {
            state.contracts = action.payload;
        }
    },
})

export const { setContracts } = contractsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectContracts = (state: RootState) => state.contracts.contracts;

export default contractsSlice.reducer
