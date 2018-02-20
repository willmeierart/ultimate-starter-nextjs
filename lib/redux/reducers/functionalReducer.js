import { CHECK_IF_MOBILE } from '../actions/types'

const initialState = {
  isMobile: false
}

export default function functionalReducer (state = initialState, action) {
  switch (action.type) {
    case CHECK_IF_MOBILE: {
      const newState = { ...state }
      newState.isMobile = action.payload
      return newState
    }
    default:
      return state
  }
}
