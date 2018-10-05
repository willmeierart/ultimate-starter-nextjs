/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../../../components/_layout/NavBar'

describe('NavBar', () => {
  it('renders correctly', () => {
    const navBar = shallow(<NavBar />)
    expect(navBar).toMatchSnapshot()
  })
})
