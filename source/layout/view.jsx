import React from 'react'

import ViewDependencies from 'viewDependencies'

// import Background from './background/component'
// import NavBar from './navbar/component'

class View extends React.Component{
  render(){
    let controller = this.props.controller
    let data = this.props.model.data
    let state = this.props.model.state
    return(
      <div className="app">
        <ViewDependencies/>

        {/* <Background/>
        <NavBar/> */}

        <h1>Hello world!</h1>

        {/* App */}
        {/* {state.app == "login" && <Login data={data} state={state} controller={controller}/>} */}

        {/* Modal */}
        {/* {state.modal == "profile" && <Profile data={data} state={state} controller={controller}/>} */}

      </div>
    )
  }
}

export default View
