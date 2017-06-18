export const languageReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.language = action.language
  localStorage.setItem("maxoftLanguage", action.language)
  return nextState
}
