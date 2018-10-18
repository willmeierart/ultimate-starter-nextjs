jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { isFreshLoad, checkIfMobile, checkIfIE, checkBrowser, getVPDims, toggleMenu } from '../../lib/redux/actions'
import { IS_FRESH_LOAD, CHECK_IF_MOBILE, CHECK_IF_IE, CHECK_BROWSER, GET_VP_DIMS, TOGGLE_MENU } from '../../lib/redux/actions/types'

const mockStore = configureMockStore([thunk])
let store

describe('environment actions', () => {
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
  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('creates an action to check if page is loaded fresh', () => {
    const expectedActions = [{ type: IS_FRESH_LOAD, payload: true }]
    return store.dispatch(isFreshLoad(true)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates an action to check if being viewed on mobile', () => {
    const expectedActions = [{ type: CHECK_IF_MOBILE, payload: false }]
    return store.dispatch(checkIfMobile()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates an action to check if users browser is IE', () => {
    const expectedActions = [{ type: CHECK_IF_IE, payload: false }]
    return store.dispatch(checkIfIE()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates an action to check what browser the user is running', () => {
    const expectedActions = [{ type: CHECK_BROWSER, payload: 'unknown' }]
    return store.dispatch(checkBrowser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates an action to fetch the viewport dimensions', () => {
    const payload = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const expectedActions = [{ type: GET_VP_DIMS, payload }]
    return store.dispatch(getVPDims()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('UI actions', () => {
  const initialState = {
    menuOpen: false
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('creates an action to toggle the menu', () => {
    const expectedActions = [{ type: TOGGLE_MENU, payload: false }]
    return store.dispatch(toggleMenu(false)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})