const stateTree = {

  state: {
    language: "hun",
    app: 'login',
    modal: null,
    inTransition: false,
    pendingResponses: [],
    selectedRoles: [],
    selectedUser: null,
    login: {
      username: "",
      password: "",
      status: "start"
    },
    reset: {
      username: "",
      status: "start"
    },
    searchParams: {
      username: "",
      ID: "",
      firmID: "",
      name: "",
      birthDate: ""
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
