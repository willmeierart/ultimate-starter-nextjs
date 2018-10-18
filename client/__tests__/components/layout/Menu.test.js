/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../../../components/_layout/Menu'

describe('Menu', () => {
  it('renders correctly', () => {
    const menu = shallow(<Menu />)
    expect(menu).toMatchSnapshot()
  })
})
