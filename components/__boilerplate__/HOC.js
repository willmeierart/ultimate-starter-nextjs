import React, { Component } from 'react'
import { binder } from '../../lib/_utils'

export default function Boilerplate (ComposedComponent) {
  class WrappedComponent extends Component {
    // constructor (props) {
    //   super(props)
    // }
    componentDidMount () {}
    render () {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  return WrappedComponent
}
