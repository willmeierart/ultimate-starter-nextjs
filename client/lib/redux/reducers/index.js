import { combineReducers } from 'redux'
import envReducer from './envReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  env: envReducer,
  ui: uiReducer
})

export default rootReducer
