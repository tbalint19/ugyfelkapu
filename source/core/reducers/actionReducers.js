export const inputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.field == "loginUsername") {
    nextState.state.login.username = action.value
  }
  if (action.field == "loginPassword") {
    nextState.state.login.password = action.value
  }
  return nextState
}
