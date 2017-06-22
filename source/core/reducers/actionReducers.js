export const inputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.field == "loginUsername") {
    nextState.state.login.username = action.value
    nextState.state.login.status = "start"
  }
  if (action.field == "loginPassword") {
    nextState.state.login.password = action.value
    nextState.state.login.status = "start"
  }
  if (action.field == "resetUsername") {
    nextState.state.reset.username = action.value
    nextState.state.reset.status = "start"
  }
  return nextState
}

export const userSelectedReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.selectedUser = nextState.data.users.filter(user => user.id == action.id)[0]
  nextState.state.modal = "editUser"
  return nextState
}
