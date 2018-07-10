// main wrapper component - layout, universal styles, etc.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkIfMobile, getVPDims } from '../lib/redux/actions'
import Header from './core/Header'
import Footer from './core/Footer'

// import globalStyles from '../../styles/index.scss'

class App extends Component {
  componentDidMount () {

  }
  render () {
    const { children } = this.props
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <header>
            <Header />
          </header>
          <main>{ children }</main>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App

App.propTypes = {
  title: PropTypes.string.isRequired
}
