import React, { useReducer } from 'react'
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import styles from '../../styles/styles'
import { withNextInputAutoFocusForm } from 'react-native-formik'
import RegularTextInput from '../../components/RegularTextInput'
import { Formik } from 'formik'
import colors from '../../styles/colors'
import { updateUser } from '../../redux/actions/userActions'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import Toast from 'react-native-simple-toast'
import {
  DURATION,
  TEXTS,
} from '../../plugins/constants'
import { debounce } from 'lodash'
import { IStoreReducer } from '../../redux/storeType'
import Button from '../../components/Button'
import { validationSchema } from '../../plugins/validation'
import { IUserLoginCredentials } from '../../types/types'
import ErrorMessage from '../../components/ErrorMessage'

const Form = withNextInputAutoFocusForm(ScrollView)
const LoginScreen = () => {
  const dispatcher = useDispatch()
  const user = useSelector((state: IStoreReducer) => state.user)
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      error: '',
    },
  )

  const onSubmit = (
    values: IUserLoginCredentials,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      Keyboard.dismiss()
      dispatcher(updateUser(values))
      Toast.showWithGravity(TEXTS.CHANGES_SAVED_SUCCESS, DURATION.TOAST.MEDIUM, Toast.BOTTOM)
    } catch (err) {
      setState({ error: TEXTS.SOMETHING_WENT_WRONG })
    }
    setSubmitting(false)
  }

  return (
    <>
      <SafeAreaView style={styles.defaultContainer}>
        <View style={styles.welcome}>
          <Text style={style.profileText}>
            {TEXTS.EDIT_PERSONAL_DETAILS}
          </Text>
        </View>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            email: user.email,
            password: user.password,
          }}
          validationSchema={validationSchema}>
          {(props) => {
            return (
              <Form style={style.formView}>
                <RegularTextInput
                  placeholder={TEXTS.EMAIL}
                  returnKeyType={'next'}
                  value={props.values.email}
                  onChange={props.setFieldValue}
                  error={props.touched.email && props.errors?.email}
                  name={'email'}
                  type={'email'}
                />
                <RegularTextInput
                  placeholder={TEXTS.NEW_PASSWORD}
                  returnKeyType={'done'}
                  value={props.values.password}
                  onChange={props.setFieldValue}
                  error={props.touched.password && props.errors?.password}
                  name={'password'}
                  type={'password'}
                  secureTextEntry={true}
                />
                <Button
                  loading={props.isSubmitting}
                  title={TEXTS.SAVE_CHANGES}
                  onPress={debounce(props.handleSubmit, DURATION.DEBOUNCE.SHORT)}
                />
                <ErrorMessage error={state.error} />
              </Form>
            )
          }}
        </Formik>
      </SafeAreaView>
    </>
  )
}

const style = StyleSheet.create<any>({

  formView: {
    flex: 1,
    margin: 20,
  },
  profileText: {
    ...styles.systemFontCenterBold,
    ...styles.fontSizeHeading1,
    marginVertical: 20,
    color: colors.blue800,
  },
})

export default LoginScreen
