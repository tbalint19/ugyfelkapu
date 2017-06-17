import React from 'react'

import ViewDependencies from 'viewDependencies'

import NavBar from './navbar/component'
import Login from './login/component'
import Footer from './footer/component'

class View extends React.Component{
  render(){
    let controller = this.props.controller
    let data = this.props.model.data
    let state = this.props.model.state
    return(
      <div className="app">
        <ViewDependencies/>

        <NavBar data={data} state={state} controller={controller}/>

        <Login data={data} state={state} controller={controller}/>

        <Footer data={data} state={state} controller={controller}/>

        {/* App */}
        {/* {state.app == "login" && <Login data={data} state={state} controller={controller}/>} */}

        {/* Modal */}
        {/* {state.modal == "profile" && <Profile data={data} state={state} controller={controller}/>} */}

      </div>
    )
  }
}

export default View
