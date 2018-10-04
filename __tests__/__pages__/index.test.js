/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../pages/index'

describe('Home', () => {
  it('renders correctly', () => {
    const home = shallow(<Home />)
    expect(home).toMatchSnapshot()
  })
})
