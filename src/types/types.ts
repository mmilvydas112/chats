import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'
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

export interface IOnChangeTextLogin {
  name: string;
  e: NativeSyntheticEvent<TextInputChangeEventData>;
}

export type onChangeTextLoginFunc = (props: IOnChangeTextLogin) => void;

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
  };
  error: string;
}
