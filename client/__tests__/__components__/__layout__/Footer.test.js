/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../components/_layout/Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const footer = shallow(<Footer />)
    expect(footer).toMatchSnapshot()
  })
})
