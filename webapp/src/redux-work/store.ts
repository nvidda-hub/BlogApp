import { configureStore } from '@reduxjs/toolkit'
import expireReducer from 'redux-persist-expire'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import persistStore from 'redux-persist/es/persistStore'

const persistStoreConfig = {
    key : 'root',
    storage,
    transforms : [expireReducer('user', { expireSeconds: 2592000 })],
}

const persistedReducer = persistReducer(persistStoreConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
export default store