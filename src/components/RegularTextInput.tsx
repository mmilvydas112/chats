import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import colors from '../styles/colors'
import styles from '../styles/styles'

interface RegularTextInputProps {
  onChange: any;
  value: string;
  name: string;
  error?: string | string[];
  extraStyles?: ViewStyle;
  props: TextInputProps;
}

const RegularTextInput = ({
  onChange,
  value,
  name,
  error = '',
  extraStyles = {},
  ...props
}: RegularTextInputProps) => {

  const onChangeWrapper = (e: string): void => {
    onChange(
      name,
      e, true)
  }

  return (
    <View style={style.inputContainer}>
      <TextInput
        style={[style.textInput, extraStyles]}
        value={value}
        onChangeText={onChangeWrapper}
        placeholderTextColor={colors.blue50}
        {...props}
      />
      {!!error && <Text style={style.errorText}>{error}</Text>}
    </View>

  )
}

const style = StyleSheet.create<any>({
  inputContainer: {
    ...styles.margin10,
  },
  errorText: {
    ...styles.systemFont,
    ...styles.fontSizeNormal,
    color: colors.red700,
  },
  textInput: {
    flex: 1,
    ...styles.paddingH10,
    borderColor: colors.indigo,
    borderWidth: 1,
    minHeight: 40,
    maxHeight: 40,
    borderRadius: 10,
  },
})

export default RegularTextInput
