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
import { TChatId } from '../types/common'
import { IChatReducerItem } from '../types/types'

export const initNewChatRequest = async (): Promise<AxiosResponse['data']> => {
  try {
    const { user }: any = store.getState()
    const res = await axios.post(API_URI(), {
      'id': '',
      'email': user.email,
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
    return res.data
  } catch (err) {
    captureException(err, 'initNewChatRequest')
    store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
  }
}

export const updateChatRequest = async (chatId: TChatId, chatObj: IChatReducerItem['chat']): Promise<AxiosResponse['data']> => {
  try {
    const res = await axios.post(API_URI(chatId), chatObj, {
      method: 'PUT',
      headers: {
        ...defaultHeaders,
        'secret-key': SECRET_KEY,
      },
    })
    if (res.status !== 200) {
      captureException(JSON.stringify(res), 'updateChatRequest')
      store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
    }
    return res.data
  } catch (err) {
    captureException(err, 'updateChatRequest')
    store.dispatch(setChatError(TEXTS.CHECK_INTERNET))
  }
}
