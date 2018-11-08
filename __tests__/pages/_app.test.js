/* eslint-env jest */
import React from 'react'
import App from 'next/app'
import { shallow, mount } from 'enzyme'
import { storeMode } from '../../lib/globals'
// import store from '../../lib/redux/store'
import configureStore from 'redux-mock-store'
import MyApp, { StateMgmtSwitch } from '../../pages/_app'
import HomePage from '../../pages/index'
import Layout from '../../components/_layout/Layout'
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
	let myApp = shallow(<MyApp {...props} />)
	let props = {}

	beforeEach(() => {
		props.store = store
		store = mockStore(initialState)
	})

	it('renders correctly', () => {
		expect(myApp).toMatchSnapshot()
	})

	// it('should have correct props', () => {
	//   const mountedApp = mount(<MyApp />)
	//   expect(mountedApp.props()).toExist()
	// })

	// it('should call `getInitialProps`', async () => {
	//   const pageProps = {
	//     ctx: {},
	//     Component: HomePage,
	//     router: {}
	//   }

	//   const initialProps = await MyApp.getInitialProps(pageProps)

	//   const mountedApp = mount(
	//     <MyApp {...props} {...pageProps}>
	//       <HomePage />
	//     </MyApp>
	//   )
	//   expect(mountedApp.getInitialProps).toHaveBeenCalled()
	// })

	describe('StateManagementSwitch', () => {
		it('renders the correct `store` component', () => {
			const correctChild =
				storeMode === 'REDUX'
					? shallow(<StateMgmtSwitch store={store}>{<Layout />}</StateMgmtSwitch>)
					: shallow(<GlobalContextProvider store={store}>{<Layout />}</GlobalContextProvider>)

			expect(correctChild.exists()).toBe(true)
		})
	})
})
