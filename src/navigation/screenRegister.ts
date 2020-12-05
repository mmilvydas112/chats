import { Navigation } from 'react-native-navigation'
import { LoginScreen } from '../screens/auth'
import {
  ChatScreen,
  ProfileScreen,
} from '../screens/main'
import {
  LeftMenu,
  SideMenu,
} from './components'
import { SCREENS } from './screenNames'
import ReduxProvider from '../redux/Provider'

export const registerScreens = (): void => {
  Navigation.registerComponent(SCREENS.SIDE_MENU.name, () => ReduxProvider(SideMenu))
  Navigation.registerComponent(SCREENS.LOGIN.name, () => ReduxProvider(LoginScreen))
  Navigation.registerComponent(SCREENS.CHAT.name, () => ReduxProvider(ChatScreen))
  Navigation.registerComponent(SCREENS.PROFILE.name, () => ReduxProvider(ProfileScreen))
  Navigation.registerComponent(SCREENS.LEFT_MENU_BTN.name, () => ReduxProvider(LeftMenu))
}
