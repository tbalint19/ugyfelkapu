export const requestedLoginReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  console.log("requested");
  return nextState
}

export const loginResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  console.log("arrived");
  return nextState
}
