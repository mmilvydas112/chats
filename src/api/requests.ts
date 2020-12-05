import axios, { AxiosResponse } from 'axios'
import {
  API_URI,
  defaultHeaders,
  SECRET_KEY,
} from './constants'
import store from '../redux/store'
import { setChatError } from '../redux/actions'
import { TEXTS } from '../plugins/constants'
import { captureException } from '../plugins/errors'

export const initNewChatRequest = async (): Promise<AxiosResponse['data']> => {
  try {
    console.log(store.getState().user.email, 'email')
    const res = await axios.post(API_URI(), {
      'id': '',
      'email': store.getState().user.email,
    }, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        'secret-key': SECRET_KEY,
      },
    })
    if (res.status !== 200) {
      store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
    }
    console.log(res, 'initNewChatRequest')
    return res.data
  } catch (err) {
    captureException(err, 'initNewChatRequest')
    store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
  }
}

export const updateChatRequest = async (id: string = ''): Promise<AxiosResponse['data']> => {
  try {
    const res = await axios.post(API_URI(id), `${JSON.stringify(store.getState().chat.chats[id])}`, {
      method: 'POST',
      headers: {
        ...defaultHeaders,
        'secret-key': SECRET_KEY,
      },
    })
    console.log(res, 'updateChatRequest')
    if (res.status !== 200) {
      store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
    }
    return res.data
  } catch (err) {
    console.log(err, 'err')
    store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
  }
}
