import { IStoreDispatch } from '../store'
import { ThunkAction } from 'redux-thunk'
import {
  ChatActions,
  INIT_CHAT,
  InitChatAction,
  SET_CHAT_ERROR,
  SetChatErrorAction,
} from '../types'
import { IStoreReducer } from '../storeType'
import {
  initNewChatRequest,
  updateChatRequest,
} from '../../api/requests'
import { updateUser } from './userActions'
import { captureException } from '../../plugins/errors'

type AppThunk<R> = ThunkAction<R, any, ChatActions, any>;

export const setChatError = (error: string = ''): AppThunk<SetChatErrorAction> => {
  return (dispatch: IStoreDispatch): SetChatErrorAction => {
    return dispatch({
      type: SET_CHAT_ERROR,
      error,
    })
  }
}

export const updateChat = (): AppThunk<Promise<any>> => {
  return async (dispatch: IStoreDispatch, getState: () => IStoreReducer): Promise<any> => {
    try {
      const { id } = getState().user
      const res = await updateChatRequest(id)
      const chatId = res?.id ?? ''
      const chatObj = res?.data ?? {}
      let chat = {
        id: chatId,
        email: res.data.email,
        messages: {
          ...getState().chat[chatId].messages || [],
          ...res.data?.messages || [],
        },
      }
      console.log(chat, 'chat')
      // dispatch({
      //   type: SET_CHAT,
      //   chatId,
      //   chat,
      // })
    } catch (err) {
      captureException(err, 'updateChat')
    }

  }
}

export const initNewChat = (): AppThunk<Promise<InitChatAction | void>> => {
  return async (dispatch: IStoreDispatch, getState: () => IStoreReducer): Promise<InitChatAction | void> => {
    try {
      const res = await initNewChatRequest()
      const chatId = res?.id ?? ''
      console.log(res, chatId, 'data')
      dispatch(updateUser({ id: chatId }))
      dispatch({
        type: INIT_CHAT,
        chatId,
        chat: {
          ...getState().chats?.chat[chatId] || {},
          ...res?.data,
          messages: [],
        },
      })
    } catch (err) {
      captureException(err, 'initNewChat')
    }
  }
}

