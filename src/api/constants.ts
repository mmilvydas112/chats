import { TChatId } from '../types/common'

export const SECRET_KEY = '$2b$10$57lyCyc1Zlqy0i0D3C20Y.3WKsE0N1E2ZJK0KOVqAifkfNXgOQ7YS'

export const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const API_URI = (chatId: TChatId = ''): string => `https://api.jsonbin.io/b/${chatId}`
