/**
 * Created by jungenpark on 5/2/16.
 */
import debug from 'debug'
const log = debug('application:popupReducer')

import Immutable from 'immutable'
import AppConstants from '../constants/AppConstants'

export default function popupReducer(state = Immutable.Map([]), action) {
  switch(action.type) {
    case AppConstants.OPEN_POPUP :
      return state.set(action.result.key, action.result.props || {})
    case AppConstants.CLOSE_POPUP :
      return state.delete(action.result.key)
    case AppConstants.CLOSE_ALL_POPUP :
      return state.clear()
  }
  return state
}