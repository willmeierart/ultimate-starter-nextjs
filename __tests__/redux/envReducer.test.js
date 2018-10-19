import envReducer from '../../lib/redux/reducers/envReducer'
import { IS_FRESH_LOAD, CHECK_IF_MOBILE, CHECK_IF_IE, CHECK_BROWSER, GET_VP_DIMS } from '../../lib/redux/actions/types'

describe('Environment Reducer', () => {
  const initialState = {
    isMobile: false,
    mobileSideways: false,
    isIE: false,
    browser: 'unknown',
    vpDims: {
      width: 0,
      height: 0
    },
    screenLocked: false,
    isFreshLoad: true
  }

  it('checks if page is loaded fresh', () => {
    expect(envReducer(initialState, { type: IS_FRESH_LOAD, payload: false })).toEqual({ ...initialState, isFreshLoad: false })
  })

  it('checks if user is on a mobile device', () => {
    expect(envReducer(initialState, { type: CHECK_IF_MOBILE, payload: true })).toEqual({ ...initialState, isMobile: true })
  })

  it('checks if user client is internet explorer', () => {
    expect(envReducer(initialState, { type: CHECK_IF_IE, payload: true })).toEqual({ ...initialState, isIE: true })
  })

  it('checks what browser the user is running', () => {
    expect(envReducer(initialState, { type: CHECK_BROWSER, payload: 'chrome' })).toEqual({ ...initialState, browser: 'chrome' })
  })

  it('fetches and sets the viewport dimensions', () => {
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    expect(envReducer(initialState, { type: GET_VP_DIMS, payload })).toEqual({ ...initialState, vpDims: payload })
  })
})