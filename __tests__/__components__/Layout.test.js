/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import storeMode from '../../lib/storeMode'
import Layout from '../../components/_layout'

const initialState = {
  env: {
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
  },
  ui: {
    menuOpen: false
  }
}
const mockStore = configureStore()

describe('Layout', () => {
  let store
  const props = {
    onCheckIfMobile: jest.fn(),
    onGetVPDims: jest.fn(),
    isMobile: false
  }

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('renders correctly', () => {
    const layout = shallow(<Layout store={store} {...props} />)
    expect(layout).toMatchSnapshot()
  })
})
