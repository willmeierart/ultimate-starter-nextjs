/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import GlobalContextProvider from '../../../components/__contextProviders/GlobalContextProvider'

describe('GlobalContextProvider', () => {
  it('renders correctly', () => {
    const globalContextProvider = shallow(<GlobalContextProvider />)
    expect(globalContextProvider).toMatchSnapshot()
  })
})
