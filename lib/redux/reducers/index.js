import { combineReducers } from 'redux'
import functionalReducer from './functionalReducer'

const rootReducer = combineReducers({
  functional: functionalReducer
})

export default rootReducer
