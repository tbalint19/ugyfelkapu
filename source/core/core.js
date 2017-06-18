import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './stateTree'

import {
  languageReducer
} from './reducers/stateReducers'

const core = (() => {

  const initialState = Object.assign({}, stateTree)

  const reducer = (current = initialState, action) => {
    switch (action.type) {
      case "LANGUAGE_CHANGED":
        return languageReducer(current, action)
      default:
        return Object.assign({}, current)
    }
  }

  const store = createStore(reducer)
  store.JSONtransfer = createApiController(store)

  return {store}

})()

export default core
