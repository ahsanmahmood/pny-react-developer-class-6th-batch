import * as ACTION_TYPES from './../../actionTypes'

export const authStartAction = () => {
  return {
    type: ACTION_TYPES.AUTH_START
  }
}

export const authSuccessAction = payload => {
  return {
    type: ACTION_TYPES.AUTH_START,
    payload
  }
}

export const authFailedAction = payload => {
  return {
    type: ACTION_TYPES.AUTH_START,
    payload
  }
}
