/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import MyApp from '../../pages/_app'

describe('MyApp', () => {
  it('renders correctly', () => {
    const myApp = shallow(<MyApp />)
    expect(myApp).toMatchSnapshot()
  })
  it('renders the correct `store` component', () => {
    
  })
})
