jest.unmock('redux-mock-store')
jest.unmock('redux-thunk')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { isFreshLoad, checkIfMobile, checkIfIE, checkBrowser, getVPDims } from '../../lib/redux/actions'
import { IS_FRESH_LOAD, CHECK_IF_MOBILE, CHECK_IF_IE, CHECK_BROWSER, GET_VP_DIMS } from '../../lib/redux/actions/types'

const mockStore = configureMockStore([thunk])

const initialState = {
  isFreshLoad: true,
  isMobile: false
}
let store

describe('environment actions', () => {
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