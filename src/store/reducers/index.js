// Packages Imports
import { combineReducers } from 'redux'

// Custom Reducers
import authReducer from './authReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  authR: authReducer,
  productR: productReducer
})

export default rootReducer
