import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './invoice/reducers'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedInvoiceReducer = persistReducer(persistConfig, invoiceReducer)

const store = configureStore({
    reducer: persistedInvoiceReducer,
    devTools: process.env.NODE_ENV !== 'production',

    // without using the Thunk middleware,
    // we‘d get an error in the browser’s console reading
    // a non-serializable value was detected in the state.
    middleware: [thunk],
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type
export type AppDispatch = typeof store.dispatch

export default store
