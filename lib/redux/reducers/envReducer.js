import { CHECK_IF_MOBILE, CHECK_IF_IE, CHECK_BROWSER, GET_VP_DIMS } from '../actions/types'

const initialState = {
  isMobile: false,
  isIE: null,
  browser: null,
  vpDims: {
    width: null,
    height: null
  }
}

export default function envReducer (state = initialState, action) {
  switch (action.type) {
    case CHECK_IF_MOBILE: {
      const newState = { ...state }
      newState.isMobile = action.payload
      return newState
    }
    case CHECK_IF_IE: {
      const newState = { ...state }
      newState.isIE = action.payload
      return newState
    }
    case CHECK_BROWSER: {
      const newState = { ...state }
      newState.browser = action.payload
      return newState
    }
    case GET_VP_DIMS: {
      const newDims = { ...state.dims }
      const { width, height } = action.payload
      newDims.width = width
      newDims.height = height
      const newState = { ...state }
      newState.dims = newDims
      return newState
    }
    default:
      return state
  }
}
