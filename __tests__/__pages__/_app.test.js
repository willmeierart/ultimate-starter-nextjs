/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import storeMode from '../../lib/storeMode'
import store from '../../lib/redux/store'
import MyApp, { StateMgmtSwitch } from '../../pages/_app'
import Layout from '../../components/_layout'
import { Provider } from 'react-redux'
import GlobalContextProvider from '../../components/__contextProviders/GlobalContextProvider'


describe('MyApp', () => {
  const props = {
    initialReduxState: {
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
  }
  const myApp = shallow(<MyApp {...props} />)
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
