// main wrapper component - layout, universal styles, etc.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkIfMobile, getVPDims } from '../../lib/redux/actions'
import Header from './Header'
import Footer from './Footer'
import { storeMode } from '../../lib/globals'

export class Layout extends Component {
  componentDidMount () {}

  componentDidCatch () {}

  render () {
    const { children } = this.props
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <header>
            <Header />
          </header>
          <section>{ children }</section>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isMobile: state.env.isMobile,
    dims: state.env.dims
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onCheckIfMobile: () => dispatch(checkIfMobile()),
    onGetVPDims: () => dispatch(getVPDims())
  }
}

export default storeMode === 'REDUX' ? connect(mapStateToProps, mapDispatchToProps)(Layout) : Layout

const reduxPropTypes = {
  isMobile: PropTypes.bool.isRequired,
  dims: PropTypes.object,
  onCheckIfMobile: PropTypes.func.isRequired,
  onGetVPDims: PropTypes.func.isRequired
}

const contextPropTypes = {}

const initialStoreProps = storeMode === 'REDUX' ? reduxPropTypes : contextPropTypes

Layout.propTypes = {
  ...initialStoreProps
}