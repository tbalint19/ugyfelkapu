import React from 'react'
import Container from 'container'

class NavBar extends Container {
  render(){
    return (
      <div className={"navbar"}>
        <div className={"navbar-controller"}>
          <div className={"navbar-text"}>
            Wizuál Bér ügyfélkapu
          </div>
          <div className={"navbar-buttons"}>
            <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">help_outline</i>
              Help
            </button>
            <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">power_settings_new</i>
              Logout
            </button>
          </div>
        </div>
        <div className={"navbar-placeholder"}></div>
      </div>
    )
  }
}

export default NavBar
