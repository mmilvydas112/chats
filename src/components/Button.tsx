import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from '../styles/styles'
import colors from '../styles/colors'
import { width } from '../styles'

export interface ButtonProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  onPress,
  title,
  loading = false,
  disabled = false,
}: ButtonProps) => {

  useEffect(() => {
    console.log('rendered')
  }, [])

  return (
    <View style={style.btnViewContainer}>
      <TouchableOpacity
        disabled={disabled}
        style={style.btn}
        onPress={onPress}>
        {!loading ? (
          <Text style={style.btnText}>
            {title}
          </Text>
        ) : (
          <ActivityIndicator
            style={{ flex: 1 }}
            color={colors.indigo}
          />
        )}
      </TouchableOpacity>
    </View>

  )
}

const style = StyleSheet.create<any>({
  btnViewContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: width * 0.4,
    height: 50,
    borderWidth: 1,
    borderColor: colors.indigo,
    borderRadius: 999,
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'center',
    ...styles.defaultShadow,
  },
  btnText: {
    ...styles.systemFontCenterBold,
    ...styles.fontSizeMedium,
    color: colors.indigo,
  },
})

export default Button
