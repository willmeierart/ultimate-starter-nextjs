import { combineReducers } from 'redux'
import envReducer from './envReducer'

const rootReducer = combineReducers({
  env: envReducer
})

export default rootReducer
