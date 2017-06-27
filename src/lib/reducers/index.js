import { combineReducers } from 'redux'
import { ADD_TOKEN, ADD_USER_INFO } from '../actions'

function user (state = {
  token: undefined,
  userInfo: {}
}, action) {
  switch (action.type) {
  case ADD_TOKEN:
    return Object.assign({}, state, {
      token: action.token
    })
  case ADD_USER_INFO:
    return Object.assign({}, state, {
      userInfo: action.userInfo
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  user
})

export default rootReducer
