export const languageReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.language = action.language
  return nextState
}
