import { IStoreDispatch } from '../store'
import { ThunkAction } from 'redux-thunk'
import {
  SET_USER,
  SetUserAction,
} from '../types'
import { IStoreReducer } from '../storeType'
import { Action } from 'redux'
import rootReducer from '../reducers'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  typeof rootReducer,
  unknown,
  Action<string>>
// type AppThunk<R> = ThunkAction<R, any, UserActions, any>;

export const updateUser = (user: Partial<IStoreReducer['user']>): AppThunk<void> => {
  return (dispatch: IStoreDispatch): SetUserAction | void => {
    dispatch({
      type: SET_USER,
      user,
    })
  }
}
