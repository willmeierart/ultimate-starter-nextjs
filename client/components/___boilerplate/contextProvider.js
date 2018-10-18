import React, { Component } from 'react'

const ThisContext = React.createContext()

class Provider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      val: 'A'
    }
  }

  changeVal = () => {
    this.setState({ val: this.state.val === 'A' ? 'B' : 'A' })
  }

  render () {
    return (
      <ThisContext.Provider value={{
        val: this.state.val,
        changeVal: this.changeVal}}>
        { this.props.children }
      </ThisContext.Provider>
    )
  }
}

export default Provider
