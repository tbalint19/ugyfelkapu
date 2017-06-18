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
      default:
        return Object.assign({}, current)
    }
  }

  const store = createStore(reducer)
  store.JSONtransfer = createApiController(store)

  return {store}

})()

export default core
