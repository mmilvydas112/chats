import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Icon } from 'native-base'
import {
  menuConfig,
  ROOT_IDS,
} from '../config'
import { ComponentEvent } from 'react-native-navigation'
import {
  colors,
  styles,
} from '../../styles'
import LinearGradient from 'react-native-linear-gradient'
import {
  mergeOptions,
  pop,
  popToRoot,
  push,
} from '../helpers'
import { SCREENS } from '../screenNames'
import { IMenuConfig } from '../../types/types'

interface SideMenuProps extends ComponentEvent {
}

const SideMenu = ({
  componentId,
}: SideMenuProps) => {

  const navigateTo = async (menuConfig: IMenuConfig): Promise<void> => {
    if (menuConfig.screenName === SCREENS.CHAT_LIST.id) { //quick way
      await pop(SCREENS.PROFILE.id)
    } else {
      await popToRoot(ROOT_IDS.LEFT_MENU_CENTER)
      await push(ROOT_IDS.LEFT_MENU_CENTER, menuConfig.screen())
    }
    mergeOptions(SCREENS.CHAT_LIST.id, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }

  return (
    <LinearGradient
      angle={-45}
      useAngle={true}
      colors={[colors.grey900, colors.grey900]}
      style={style.inputContainer}>
      <View style={style.sideMenuTopView}>
        <Text style={style.sideMenuTopText}>
          {':)'}
        </Text>
      </View>
      {menuConfig.map((item, index) => {
        return (
          <TouchableOpacity
            key={`SM_${index}`}
            onPress={() => navigateTo(item)}
            style={style.touchableView}>
            <Icon
              type={item.iconType}
              name={item.iconName}
              style={style.icon}
            />
            {/*<View style={styles.flex1}>*/}
            {/*  <Text*/}
            {/*    adjustsFontSizeToFit={true}*/}
            {/*    style={style.screenText}>{`${item.title}`}*/}
            {/*  </Text>*/}
            {/*</View>*/}
          </TouchableOpacity>
        )
      })}
    </LinearGradient>
  )
}

const style = StyleSheet.create<any>({
  inputContainer: {
    flex: 1,
  },
  sideMenuTopView: {
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.paddingV10,
  },
  touchableView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.indigo,
    flexDirection: 'row',
    borderBottomWidth: 1,
    overflow: 'visible',
    backgroundColor: colors.grey900,
  },
  icon: {
    margin: 5,
    color: colors.grey25,
    flex: 1,
  },
  itemText: {
    ...styles.systemFontBold,
    fontSize: 16,
  },
  sideMenuTopText: {
    fontSize: 30,
    color: colors.grey25,
  },
})

export default SideMenu
