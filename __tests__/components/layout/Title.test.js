/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Title from '../../../components/_layout/Title'

describe('Title', () => {
  it('renders correctly', () => {
    const title = shallow(<Title />)
    expect(title).toMatchSnapshot()
  })
})
