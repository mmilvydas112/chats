import { IStoreDispatch } from '../store'
import { ThunkAction } from 'redux-thunk'
import {
  ChatActions,
  INIT_CHAT,
  InitChatAction,
  SET_CHAT_ERROR,
  UPDATE_CHAT,
} from '../types'
import { IStoreReducer } from '../storeType'
import {
  initNewChatRequest,
  updateChatRequest,
} from '../../api/requests'
import { updateUser } from './userActions'
import { captureException } from '../../plugins/errors'
import { TChatId } from '../../types/common'
import { TEXTS } from '../../plugins/constants'
import { Action } from 'redux'

type AppThunk<R> = ThunkAction<R, any, ChatActions, Action<string>>;

export const setChatError = (error: string = ''): any => {
  return (dispatch: IStoreDispatch): any => {
    return dispatch({
      type: SET_CHAT_ERROR,
      error,
    })
  }
}

export const sendChatMessage = (chatId: TChatId, message: string): AppThunk<Promise<any>> => {
  return async (dispatch: IStoreDispatch, getState: () => IStoreReducer): Promise<any> => {
    try {
      if (!message) {
        // @ts-ignore
        dispatch(setChatError(TEXTS.CHAT_MESSAGE_EMPTY))
        return
      }
      const chatObj = getState().chats.chat[chatId]
      const tempMessageId = new Date().getTime()
      chatObj.messages = [...chatObj?.messages ?? [], {
        id: tempMessageId,
        message,
        createdAt: new Date().getTime(),
      }]
      const res = await updateChatRequest(chatId, chatObj) //TODO recheck api references
      // console.log(res, 'res')
      dispatch({
        type: UPDATE_CHAT,
        chatId,
        chatObj,
      })
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
      // @ts-ignore
      dispatch(updateUser({ id: chatId }))
      dispatch({
        type: INIT_CHAT,
        chatId,
        chat: {
          ...getState().chats?.chat[chatId] || {},
          ...res?.data,
          id: chatId,
          messages: [],
        },
      })
    } catch (err) {
      captureException(err, 'initNewChat')
    }
  }
}

