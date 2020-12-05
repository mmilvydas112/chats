import * as Yup from 'yup'
import {
  LIMITS,
  TEXTS,
} from './constants'

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(TEXTS.EMAIL_INCORRECT),
  password: Yup.string()
    .required()
    .min(LIMITS.PASSWORD_MIN_CHAR, TEXTS.PASSWORD_TOO_SHORT),
})
