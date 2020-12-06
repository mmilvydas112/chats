import {
  LayoutStackChildren,
  Navigation,
} from 'react-native-navigation'
import { SCREENS } from './screenNames'
import { height } from '../styles/dimensions'
import { ROOT_IDS } from './config'
import { TEXTS } from '../plugins/constants'
import {
  defaultLayout,
  defaultSideMenu,
  leftButton,
} from './styles'
import { TChatId } from '../types/common'

export const setMainRoot = (): Promise<string> => {
  return Navigation.setRoot({
    root: {
      sideMenu: {
        id: ROOT_IDS.ROOT_SIDE_MENU,
        options: {
          layout: defaultLayout(),
          sideMenu: {
            left: {
              visible: false,
              width: 50,
              height: height,
            },
            openGestureMode: 'bezel',
          },
          topBar: {
            visible: true,
          },
        },
        left: {
          component: {
            id: SCREENS.SIDE_MENU.id,
            name: SCREENS.SIDE_MENU.name,
          },
        },
        center: {
          stack: {
            id: ROOT_IDS.LEFT_MENU_CENTER,
            children: [
              chatList(),
            ],
            options: {
              sideMenu: {
                left: {
                  visible: false,
                },
              },
              topBar: {
                leftButtons: [
                  {
                    showAsAction: 'always',
                    id: 'leftBtnId',
                    component: {
                      id: SCREENS.LEFT_MENU_BTN.id,
                      name: SCREENS.LEFT_MENU_BTN.name,
                    },
                  },
                ],
                visible: true,
                backButton: {
                  visible: false,
                },
              },
            },
          },
        },
      },
    },
  })
}

export const profile = (): LayoutStackChildren => {
  return {
    component: {
      id: SCREENS.PROFILE.id,
      name: SCREENS.PROFILE.name,
      options: {
        sideMenu: defaultSideMenu(),
        topBar: {
          backButton: {
            visible: false,
          },
          title: {
            text: TEXTS.PROFILE_SCREEN,
            alignment: 'center',
          },
          leftButtons: [
            leftButton(),
          ],
        },
      },
    },
  }
}

export const chatList = (): LayoutStackChildren => {
  return {
    component: {
      id: SCREENS.CHAT_LIST.id,
      name: SCREENS.CHAT_LIST.name,
      options: {
        sideMenu: defaultSideMenu(),
        topBar: {
          title: {
            text: TEXTS.CHAT_LIST_SCREEN,
            alignment: 'center',
          },
          backButton: {
            visible: false,
          },
          leftButtons: [
            leftButton(),
          ],
        },
      },
    },
  }
}

export const chat = (chatId: TChatId): LayoutStackChildren => {
  return {
    component: {
      id: SCREENS.CHAT.id,
      name: SCREENS.CHAT.name,
      options: {
        sideMenu: defaultSideMenu(),
        topBar: {
          title: {
            text: TEXTS.CHAT_SCREEN,
            alignment: 'center',
          },
          backButton: {
            visible: true,
          },
        },
      },
      passProps: {
        chatId,
      },
    },
  }
}
