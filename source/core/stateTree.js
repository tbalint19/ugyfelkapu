const stateTree = {

  state: {
    language: "hun",
    app: 'login',
    modal: null,
    inTransition: false,
    pendingResponses: [],
    selectedRoles: [],
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
    firm: {
      id: null,
      name: ""
    },
    users: []
  }

}

export default stateTree
