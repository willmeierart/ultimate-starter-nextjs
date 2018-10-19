/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../components/_layout/Header'

describe('Header', () => {
  it('renders correctly', () => {
    const header = shallow(<Header />)
    expect(header).toMatchSnapshot()
  })
})
