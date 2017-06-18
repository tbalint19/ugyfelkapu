import React from 'react'

import ViewDependencies from 'viewDependencies'

import NavBar from './navbar/component'
import Footer from './footer/component'

import Login from './login/component'
import MainController from './mainController/component'
import Users from './users/component'

import EditUser from './editUser/component'

class View extends React.Component{
  render(){
    let controller = this.props.controller
    let data = this.props.model.data
    let state = this.props.model.state
    return(
      <div className="app">
        <ViewDependencies/>

        <NavBar data={data} state={state} controller={controller}/>

        <Footer data={data} state={state} controller={controller}/>

        {/* Apps */}
        {state.app == "login" && <Login data={data} state={state} controller={controller}/>}

        {state.app == "mainController" && <MainController data={data} state={state} controller={controller}/>}

        {state.app == "users" && <Users data={data} state={state} controller={controller}/>}


        {/* Modal */}
        {state.modal == "editUser" && <EditUser data={data} state={state} controller={controller}/>}

      </div>
    )
  }
}

export default View
