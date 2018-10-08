/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../../pages/index'

describe('Home', () => {
  const home = shallow(<Home />)
  it('renders correctly', () => {
    expect(home).toMatchSnapshot()
  })
  // describe('when there is an error, `componentDidCatch` fires', () => {
  //   console.log(home.error)
  //   home.error = true
  //   expect(home.componentDidCatch).toHaveBeenCalled()
  // })
})
