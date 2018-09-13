/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import App from '../components/App'

describe('With Enzyme', () => {
  it('renders correctly', () => {
    const app = shallow(<App />)
    expect(app).toMatchSnapshot()
  })
})

// describe('With Snapshot Testing', () => {
//   it('renders', () => {
//     const component = renderer.create(<App />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
