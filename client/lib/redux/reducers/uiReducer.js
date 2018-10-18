import { TOGGLE_MENU } from '../actions/types'

const initialState = {
  menuOpen: false
}

export default function uiReducer (state = initialState, action) {
  const defaultAction = key => {
    const newState = { ...state }
    newState[key] = action.payload
    return newState
  }
  switch (action.type) {
    case TOGGLE_MENU: {
      return defaultAction('menuOpen')
    }
    default:
      return state
  }
}
