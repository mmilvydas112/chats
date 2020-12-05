import { SET_USER } from '../types'
import { IUserReducer } from '../storeType'

let initialState = {
  email: '',
  password: '',
  id: '',
}

const userReducer: any = (state: IUserReducer = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      }
    default:
      return state
  }
}

export default userReducer
