import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionMotion, spring } from 'react-motion'
import { binder } from '../../lib/_utils'

export default class TransitionMotionWrapper extends Component {
  constructor (props) {
    super(props)
    binder(this, ['willEnter'])
  }

  componentDidMount () {
    this.props.readyTimeout()
  }

  willEnter () {
    return { translate: this.props.width }
  }

  render () {
    const { k, children, width, ready } = this.props
    return (
      <TransitionMotion
        willEnter={this.willEnter}
        styles={width ? [{ key: `${k}`, style: { translate: spring(0, { stiffness: 60, damping: 15 }) }, width: '100%', height: '100%' }] : []}>
        { interpolated =>
          <div style={{ width: '100%', height: '100%' }}>
            { interpolated.map(config =>
              <div key={config.key} config={config} style={{
                transform: `translate3d(${config.style.translate}px,0,0)`,
                willChange: 'transform',
                overflow: 'hidden',
                width: '100%',
                height: '100%'
              }} className='transition-sled'>
                { ready && children }
              </div>
            ) }
          </div>
        }
      </TransitionMotion>
    )
  }
}

TransitionMotionWrapper.propTypes = {
  k: PropTypes.string.isRequired(),
  width: PropTypes.number.isRequired()
}
