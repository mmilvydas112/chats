export const DURATION = {
  TOAST: {
    SHORT: 500,
    MEDIUM: 1500,
    LONG: 2500,
  },
  DEBOUNCE: {
    SHORT: 222,
    MEDIUM: 444,
    LONG: 666,
  },
}

export const MESSAGES = {
  EMAIL_INCORRECT: 'Please enter valid email address',
  PASSWORD_TOO_SHORT: 'Password is too short',
  CHANGES_SAVED_SUCCESS: 'Changes successfully saved',
  EDIT_PERSONAL_DETAILS: 'Edit your personal details',
  WELCOME_TO_PROFILE: 'Welcome to Login',
}

export const ERROR_TEXT = {
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
  CHECK_INTERNET: 'Something went wrong. Check internet connection and try again.',
}

export const NAVIGATION_TEXT = {
  CHAT_SCREEN: 'Chat',
  CHAT_LIST_SCREEN: 'Chats',
  PROFILE_SCREEN: 'EDIT PROFILE',
}

export const BUTTON_TEXT = {
  LOGIN: 'Login',
  SAVE_CHANGES: 'Save changes',
}

export const PLACEHOLDERS = {
  EMAIL: 'Write your email...',
  PASSWORD: 'Write your password...',
  NEW_PASSWORD: 'Write your new password...',
}

export const TEXTS = {
  ...MESSAGES,
  ...BUTTON_TEXT,
  ...PLACEHOLDERS,
  ...ERROR_TEXT,
  ...NAVIGATION_TEXT,
}

export const LIMITS = {
  PASSWORD_MIN_CHAR: 8,
}
