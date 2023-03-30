import { configureStore } from '@reduxjs/toolkit'
import patientsReducer from '@/features/patients/slice'
import { patientsApi } from './features/patients/api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [patientsApi.reducerPath]: patientsApi.reducer,
        patients: patientsReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(patientsApi.middleware)
    },
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch