import React from 'react'
import Container from 'container'

class NavBar extends Container {
  render(){
    let app = this.props.state.app
    let language = this.props.state.language
    let portal = {eng: "Customerportal", hun: "Ügyfélkapu"}
    let help = {eng: "Help", hun: "Súgó"}
    let home = {eng: "Home", hun: "Főoldal"}
    let logout = {eng: "Logout", hun: "Kijelentkezés"}
    return (
      <div className={"navbar"}>
        <div className={"navbar-controller"}>
          <div className={"navbar-text"}>
            Wizuál Bér {portal[language]}
          </div>
          <div className={"navbar-buttons"}>
            <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">help_outline</i>
              {help[language]}
            </button>
            {(app != "login" && app != "home") && <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">account_balance</i>
              {home[language]}
            </button>}
            {app == "home" && <button className={"navbar-button"}>
              <i className="material-icons md-12 icon-align">power_settings_new</i>
              {logout[language]}
            </button>}
          </div>
        </div>
        <div className={"navbar-placeholder"}></div>
      </div>
    )
  }
}

export default NavBar
