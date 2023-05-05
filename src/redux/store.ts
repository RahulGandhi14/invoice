import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import invoiceReducer from './invoice/reducers'
import themeReducer from './theme/reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const combinedReducer = combineReducers({
    invoice: invoiceReducer,
    theme: themeReducer,
})

const rootReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: rootReducer,
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
