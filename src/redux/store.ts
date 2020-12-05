// configureStore.js

import {
  Action,
  applyMiddleware,
  createStore,
} from 'redux'
import {
  persistReducer,
  persistStore,
} from 'redux-persist'
import thunk, { ThunkAction } from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import promiseMiddleware from 'redux-promise'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['chat'],
}

let middlewareStack = [thunk, promiseMiddleware]

const middleware = applyMiddleware(...middlewareStack)

const composeWithDev = composeWithDevTools({
  //extra options
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDev(middleware))

persistStore(store)

export default store

export type IStoreDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  IStoreDispatch,
  unknown,
  Action<string>>
