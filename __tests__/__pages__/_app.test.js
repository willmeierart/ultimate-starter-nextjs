/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import storeMode from '../../lib/storeMode'
// import store from '../../lib/redux/store'
import configureStore from 'redux-mock-store'
import MyApp, { StateMgmtSwitch } from '../../pages/_app'
import Layout from '../../components/_layout'
import { Provider } from 'react-redux'
import GlobalContextProvider from '../../components/__contextProviders/GlobalContextProvider'

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

describe('MyApp', () => {
  let store
  const props = { store }
  const myApp = shallow(<MyApp {...props} />)

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('renders correctly', () => {
    expect(myApp).toMatchSnapshot()
  })

  describe('StateManagementSwitch', () => {
    it('renders the correct `store` component', () => {
      const correctChild = storeMode === 'REDUX'
        ? shallow(
            <StateMgmtSwitch store={store}>
              { <Layout /> }
            </StateMgmtSwitch>
          )
        : shallow(
            <GlobalContextProvider store={store}>
              { <Layout /> }
            </GlobalContextProvider>
          )

      expect(correctChild.exists()).toBe(true)
    })
  })
})
