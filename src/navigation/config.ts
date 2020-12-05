import { IMenuConfig } from '../types/types'
import {
  chatList,
  profile,
} from './main'
import { SCREENS } from './screenNames'

export const menuConfig: IMenuConfig[] = [
  {
    iconType: 'FontAwesome',
    iconName: 'wechat',
    screen: () => chatList(),
    title: 'Chats',
    screenName: SCREENS.CHAT.id,
  },
  {
    iconType: 'MaterialCommunityIcons',
    iconName: 'account',
    screen: () => profile(),
    title: 'Profile',
    screenName: SCREENS.PROFILE.id,
  },
]

export const ROOT_IDS = {
  LEFT_MENU_CENTER: 'LEFT_MENU_CENTER_ID',
  ROOT_SIDE_MENU: 'ROOT_SIDE_MENU_ID',
}
