import { IChatReducerItem } from '../types/types'
import { TChatId } from '../types/common'
import { IUserReducer } from './storeType'

export const SET_USER = 'SET_USER'

export interface SetUserAction {
  type: typeof SET_USER;
  user: Partial<IUserReducer>;
}

export type UserActions = SetUserAction

export const UPDATE_CHAT = 'UPDATE_CHAT'

export interface UpdateChatAction {
  type: typeof UPDATE_CHAT;
  chatId: TChatId;
  chat: IChatReducerItem;
}

export const SET_CHAT_ERROR = 'SET_CHAT_ERROR'

export interface SetChatErrorAction {
  type: typeof SET_CHAT_ERROR;
  error: string;
}

export const INIT_CHAT = 'INIT_CHAT'

export interface InitChatAction {
  type: typeof INIT_CHAT;
  chatId: TChatId;
  chat: IChatReducerItem;
}

export type ChatActions = UpdateChatAction | SetChatErrorAction | InitChatAction
