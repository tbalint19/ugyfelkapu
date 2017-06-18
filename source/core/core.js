import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './stateTree'

import {
  languageReducer
} from './reducers/stateReducers'

import {
  modalOpenReducer,
  modalClosedReducer
} from './reducers/viewReducers'

import {
  inputReducer
} from './reducers/actionReducers'

import {
  requestedLoginReducer,
  loginResponseReducer
} from './reducers/responseReducers'

const core = (() => {

  const initialState = Object.assign({}, stateTree)
  initialState.state.language = localStorage.maxoftLanguage ?
    localStorage.maxoftLanguage :
    navigator.language == "hu" ? "hu" : "eng"

  const reducer = (current = initialState, action) => {
    switch (action.type) {
      case "LANGUAGE_CHANGED":
        return languageReducer(current, action)
      case "MODAL_OPENED":
        return modalOpenReducer(current, action)
      case "MODAL_CLOSED":
        return modalClosedReducer(current, action)
      case "INPUT_FIELD_CHANGED":
        return inputReducer(current, action)
      case "LOGIN_REQUESTED":
        return requestedLoginReducer(current, action)
      case "LOGIN_RESPONSE_ARRIVED":
        return loginResponseReducer(current, action)
      default:
        return Object.assign({}, current)
    }
  }

  const store = createStore(reducer)
  store.JSONtransfer = createApiController(store)

  return {store}

})()

export default core
