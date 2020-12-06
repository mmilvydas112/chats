import {
  INIT_CHAT,
  SET_CHAT_ERROR,
  UPDATE_CHAT,
} from '../types'
import { IStoreReducer } from '../storeType'

let initialState: IStoreReducer['chats'] = {
  chat: {},
  error: '',
}

const chatReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CHAT:
      return {
        ...state,
      }
    case INIT_CHAT:
      return {
        ...state,
        chat: {
          ...state.chat,
          [action.chatId]: {
            ...state.chat[action.chatId] || {},
            ...action.chat,
          },
        },
      }
    case SET_CHAT_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state
  }
}

export default chatReducer
