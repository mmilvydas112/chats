import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../../styles'
import { mergeOptions } from '../helpers'
import { ROOT_IDS } from '../config'

const LeftMenu = ({}) => {

  const openSideMenu = (): void => {
    mergeOptions(ROOT_IDS.LEFT_MENU_CENTER, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    })
  }

  return (
    <TouchableOpacity
      onPress={openSideMenu}
      style={style.container}>
      <Icon
        type={'MaterialIcons'}
        name={'menu'}
        style={{
          color: colors.blue50,
        }}
      />
    </TouchableOpacity>

  )
}

const style = StyleSheet.create<any>({
  container: {
    width: 50,
    height: 50,
  },
})

export default LeftMenu
