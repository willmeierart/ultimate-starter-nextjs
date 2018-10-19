// take entire app and say, unless children change, don't update anything inside ScrollOMatic

import React, { Component } from 'react'

export default class PerformanceGate extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.checkedProps !== nextProps.checkedProps) {
      return true
    }
    return false
  }
  render () {
    return (
      <div>{ this.props.children }</div>
    )
  }
}
