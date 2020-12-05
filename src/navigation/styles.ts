import {
  LayoutOrientation,
  OptionsLayout,
  OptionsSideMenu,
  OptionsTopBarButton,
} from 'react-native-navigation/lib/src/interfaces/Options'
import { colors } from '../styles'
import { SCREENS } from './screenNames'

export const defaultSideMenu = (): OptionsSideMenu => {
  return {
    left: {
      visible: false,
    },
  }
}

export const orientation: LayoutOrientation[] = ['portrait']

export const defaultLayout = (): OptionsLayout => {
  return {
    ...orientation,
    backgroundColor: colors.white,
    componentBackgroundColor: colors.white,
  }
}

export const leftButton = (): OptionsTopBarButton => {
  return {
    showAsAction: 'always',
    id: 'leftBtnId',
    component: {
      id: SCREENS.LEFT_MENU_BTN.id,
      name: SCREENS.LEFT_MENU_BTN.name,
    },
  }
}
