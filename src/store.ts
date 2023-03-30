import { configureStore } from '@reduxjs/toolkit'
import patientsReducer from '@/features/patients/slice'
import contractsReducer from '@/features/contracts/slice'
import { patientsApi } from './features/patients/api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contractsApi } from './features/contracts/api'

export const store = configureStore({
    reducer: {
        [patientsApi.reducerPath]: patientsApi.reducer,
        [contractsApi.reducerPath]: contractsApi.reducer,
        patients: patientsReducer,
        contracts: contractsReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(patientsApi.middleware).concat(contractsApi.middleware)
    },
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch