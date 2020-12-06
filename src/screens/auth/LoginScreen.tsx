import React, {
  useEffect,
  useReducer,
} from 'react'
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { withNextInputAutoFocusForm } from 'react-native-formik'
import RegularTextInput from '../../components/RegularTextInput'
import { Formik } from 'formik'
import { updateUser } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { IUserLoginCredentials } from '../../types/types'
import {
  DURATION,
  TEXTS,
} from '../../plugins/constants'
import { debounce } from 'lodash'
import Button from '../../components/Button'
import { styles } from '../../styles'
import { validationSchema } from '../../plugins/validation'
import { setMainRoot } from '../../navigation/main'
import store from '../../redux/store'
import ErrorMessage from '../../components/ErrorMessage'

const Form = withNextInputAutoFocusForm(ScrollView)
const LoginScreen = () => {
  const dispatcher = useDispatch()
  const [state, setState] = useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    {
      error: '',
    },
  )

  useEffect(() => {
    try {
      // @ts-ignore
      const { password } = store.getState().user
      if (password) { //cached data - auto login
        setMainRoot()
      }
    } catch (err) {
      setState({ error: TEXTS.SOMETHING_WENT_WRONG })
    }
  }, [])

  const onSubmit = async (
    values: IUserLoginCredentials,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ): Promise<void> => {
    try {
      Keyboard.dismiss()
      dispatcher(updateUser(values))
      await setMainRoot()
    } catch (err) {
      setSubmitting(false)
      setState({ error: TEXTS.SOMETHING_WENT_WRONG })
    }
  }

  return (
    <>
      <SafeAreaView style={styles.defaultContainer}>
        <View style={styles.welcome}>
          <Text style={style.loginText}>
            {TEXTS.WELCOME_TO_PROFILE}
          </Text>
        </View>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            email: '',
            password: '',
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
                />
                <RegularTextInput
                  placeholder={TEXTS.PASSWORD}
                  returnKeyType={'done'}
                  value={props.values.password}
                  onChange={props.setFieldValue}
                  error={props.touched.password && props.errors?.password}
                  name={'password'}
                  secureTextEntry={true}
                />
                <Button
                  loading={props.isSubmitting}
                  title={TEXTS.LOGIN}
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
})

export default LoginScreen
