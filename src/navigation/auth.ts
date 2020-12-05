import {
  LayoutRoot,
  LayoutStackChildren,
} from 'react-native-navigation'
import { SCREENS } from './screenNames'
import { defaultLayout } from './styles'

export const setAuthLoginRoot = (): LayoutRoot => {
  return {
    root: {
      stack: {
        id: 'authStack',
        children: [
          login(),
        ],
        options: {
          layout: defaultLayout(),
        },
      },
    },
  }
}

export const login = (): LayoutStackChildren => {
  return {
    component: {
      id: SCREENS.LOGIN.id,
      name: SCREENS.LOGIN.name,
      options: {
        topBar: {
          visible: false,
        },
      },
    },
  }
}
