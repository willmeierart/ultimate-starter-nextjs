import uiReducer from '../../lib/redux/reducers/uiReducer'
import { TOGGLE_MENU } from '../../lib/redux/actions/types'

describe('UI Reducer', () => {
  const initialState = {
    menuOpen: false
  }

  describe('toggleMenu', () => {
    it('closes the menu', () => {
      expect(uiReducer(initialState, { type: TOGGLE_MENU, payload: false })).toEqual({ menuOpen: false })
    })
  
    it('opens the menu', () => {
      expect(uiReducer(initialState, { type: TOGGLE_MENU, payload: true })).toEqual({ menuOpen: true })
    })
  })
})