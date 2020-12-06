import React, {
  FunctionComponent,
  ReactElement,
} from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function ReduxProvider(Component: any): FunctionComponent<any> {
  return (props): ReactElement => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
