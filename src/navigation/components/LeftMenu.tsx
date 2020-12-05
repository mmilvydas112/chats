import React, { useEffect } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'native-base'
import { colors } from '../../styles'

const LeftMenu = ({}) => {

  useEffect(() => {
    console.log('rendered')
  }, [])

  return (
    <TouchableOpacity
      onPress={() => console.log('hey')}
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
    backgroundColor: 'blue',
  },
})

export default LeftMenu
