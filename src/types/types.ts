import {
  TChatId,
  TIcons,
} from './common'
import { LayoutStackChildren } from 'react-native-navigation'
import { IUserReducer } from '../redux/storeType'

export interface IUserLoginCredentials {
  email: NonNullable<string>;
  password: NonNullable<string>;
}

export interface IMenuConfig {
  iconType: TIcons;
  iconName: string;
  screen: () => LayoutStackChildren;
  title: string;
  screenName: string;
}

export interface IChatReducerItem {
  chat: {
    id: TChatId;
    email: IUserReducer['email'];
    messages: []
  } | any;
  error: string;
}
