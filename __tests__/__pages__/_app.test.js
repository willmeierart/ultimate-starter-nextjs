/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import MyApp from '../../pages/_app'

describe('MyApp', () => {
  const myApp = shallow(<MyApp />)
  it('renders correctly', () => {
    expect(myApp).toMatchSnapshot()
  })

  it('renders the correct `store` component', () => {
    expect(myApp.find('StateMgmtSwitch')).toExist()
  })
})
