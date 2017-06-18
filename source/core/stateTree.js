const stateTree = {

  state: {
    language: "hun",
    app: 'login',
    modal: null,
    inTransition: false,
    login: {
      username: "",
      password: "",
      error: false
    }
  },

  data: {
    user: {
      id: null,
      username: "",
      email: ""
    },
    users: []
  }

}

export default stateTree
