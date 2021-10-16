import * as ACTION_TYPES from './../../actionTypes'

// starting state
const initialState = {
  isLoggedIn: false,
  user: null,
  processing: false,
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_START:
      return authStartFun(state, action)

    case ACTION_TYPES.AUTH_SUCCESS:
      return authSuccessFun(state, action)

    case ACTION_TYPES.AUTH_FAILED:
      return authFailedFun(state, action)

    default:
      return state
  }
}

const authStartFun = (state, action) => {
  const updatedState = { ...state, processing: true }
  return updatedState
}

const authSuccessFun = (state, action) => {
  // @TODO in API module
  // user data from action.payload, set that
  const updatedState = { ...state, processing: false }
  return updatedState
}

const authFailedFun = (state, action) => {
  // @TODO in API module
  // set authError from action.payload
  const updatedState = { ...state, processing: false }
  return updatedState
}

export default authReducer