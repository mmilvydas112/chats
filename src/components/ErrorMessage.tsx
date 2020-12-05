import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import styles from '../styles/styles'
import colors from '../styles/colors'

export interface ErrorMessageProps {
  error?: string
}

const ErrorMessage = ({
  error = '',
}: ErrorMessageProps) => {

  return (
    <>
      {!!error && (
        <View style={style.errorView}>
          <Text style={style.errorText}>
            {`${error}`}
          </Text>
        </View>
      )}
    </>
  )
}

const style = StyleSheet.create<any>({
  errorView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    ...styles.systemFontCenterBold,
    fontSize: 14,
    color: colors.red700,
  },
})

export default ErrorMessage
