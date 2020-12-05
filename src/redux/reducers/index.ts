import { combineReducers } from 'redux'
import chatReducer from './chatReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  chats: chatReducer,
  user: userReducer,
})

export type rootReducer = ReturnType<typeof rootReducer>;

export default rootReducer
