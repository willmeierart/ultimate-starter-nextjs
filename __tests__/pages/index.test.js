/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import HomePage from '../../pages/index'

describe('HomePage', () => {
  const homePage = shallow(<HomePage />)
  it('renders correctly', () => {
    expect(homePage).toMatchSnapshot()
  })
  // describe('when there is an error, `componentDidCatch` fires', () => {
  //   console.log(home.error)
  //   home.error = true
  //   expect(home.componentDidCatch).toHaveBeenCalled()
  // })
})
