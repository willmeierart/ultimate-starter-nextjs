import React, { Component } from 'react'

const GlobalContext = React.createContext()

class GlobalContextProvider extends Component {
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
      <GlobalContext.Provider value={{
        val: this.state.val,
        changeVal: this.changeVal}}>
        { this.props.children }
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContextProvider
