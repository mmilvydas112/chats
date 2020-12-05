import {
  IChatReducerItem,
  IUserLoginCredentials,
} from '../types/types'
import { TChatId } from '../types/common'

export interface IUserReducer extends IUserLoginCredentials {
  id: TChatId; //acts as userId and relates to current chat only for session, might need changing
}

export interface IStoreReducer {
  user: IUserReducer;
  chats: IChatReducerItem;
}
