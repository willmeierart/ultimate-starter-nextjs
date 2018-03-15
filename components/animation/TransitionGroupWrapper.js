import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'
// import component from wherever

export default class TransitionGroupWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = { show: false }
  }
  componentDidMount () { setTimeout(() => { this.setState({ show: true }) }, 500) } // timeout func waits for component to mount before showing
  renderComponent () {
    return <div /> // in lieu of an imported component
  }

  render () {
    const { duration } = this.props
    const defaultStyle = { // could refactor to pass both styles and component as props
      transform: 'translateY(125px)'
    }
    const transitionStyles = {
      entering: { transform: 'translateY(125px)' },
      entered: { transform: 'translateY(0)', transition: `transform ${duration}ms ease-out` }
    }
    return (
      <Transition in={this.state.show} timeout={duration}>
        { state => (
          <div className='outer-wrapper' style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <div className='inner-wrapper'>
              { this.renderComponent() }
            </div>
            <style jsx>{``}</style>
          </div>
        )}
      </Transition>
    )
  }
}

TransitionGroupWrapper.propTypes = {
  duration: PropTypes.number.isRequired
}
