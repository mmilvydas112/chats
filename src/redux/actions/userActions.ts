import { IStoreDispatch } from '../store'
import { ThunkAction } from 'redux-thunk'
import {
  SET_USER,
  SetUserAction,
  UserActions,
} from '../types'
import { IUserReducer } from '../storeType'

type AppThunk<R> = ThunkAction<R, any, UserActions, any>;

export const updateUser = (user: Partial<IUserReducer>): AppThunk<SetUserAction> => {
  return (dispatch: IStoreDispatch): SetUserAction => {
    return dispatch({
      type: SET_USER,
      user,
    })
  }
}
