/**
 * Created by jungenpark on 5/2/16.
 */
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fromJS } from 'immutable'

import user from './userReducer'
import popup from './popupReducer'

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  popup,
  routing: routeReducer
})

export default rootReducer
