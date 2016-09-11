/**
 * Created by jungenpark on 5/2/16.
 */
import debug from 'debug'
const log = debug('application:userReducer')

import Immutable from 'immutable'
import AppConstants from '../constants/AppConstants'

export default function userReducer(state = Immutable.Map({'isLogin' : false}), action) {
  switch(action.type) {
    case AppConstants.USER_LOGIN :
      return Immutable.fromJS(action.user).set('isLogin', true)
    case AppConstants.JOIN_SUCCESS:
      return Immutable.fromJS(action.user).set('isLogin', true)
    case AppConstants.USER_LOGINFAIL :
      return Immutable.fromJS(action.user).set('error', action.errorCode).set('isLogin', false)
    case AppConstants.USER_CLEAR_STATE :
      return state.set('error', '')
    case AppConstants.USER_GUESTTOKEN :
      return state.set('guesttoken', action.guestToken).set('isLogin', false)
    case AppConstants.USER_ACCESSTOKEN:
      return Immutable.fromJS(action.user).set('accessToken', action.accessToken).set('isLogin', true)
    case AppConstants.USER_LOGOUT:
      return state.clear().set('isLogin', false)
  }
  return state
}
