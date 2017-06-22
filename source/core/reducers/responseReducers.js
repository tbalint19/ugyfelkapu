export const requestReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses.push(action.request)
  return nextState
}

export const resetResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter(request => request != "reset")
  nextState.state.reset.status = action.data.is_succesful ? "success" : "error"
  if (action.data.is_succesful){
    nextState.state.reset.username = ""
  }
  return nextState
}

export const loginResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter(request => request != "login")
  if (action.data.is_succesful){
    nextState.state.app = "mainController"
    nextState.state.login.username = ""
    nextState.state.login.password = ""
  }
  nextState.state.login.status = action.data.is_succesful ? "success" : "error"
  return nextState
}

export const logoutResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter(request => request != "logout")
  nextState.state.app = action.data.is_succesful ? "login" : "mainController"
  return nextState
}

export const userDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.user = action.data.user
  return nextState
}

export const firmDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.firm = action.data.firm
  return nextState
}

export const usersDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.users = action.data.users
  return nextState
}
