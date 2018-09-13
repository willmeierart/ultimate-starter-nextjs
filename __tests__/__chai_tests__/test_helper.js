import _$ from 'jQuery'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import jsdom from 'jsdom'
import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../lib/redux/reducers/'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html></html>')
global.window = global.document.defaultView
const $ = _$(window)

chaiJquery(chai, chai.util, $)

function renderComponent (ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )
}
