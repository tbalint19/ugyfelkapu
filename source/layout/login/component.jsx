import React from 'react'
import Container from 'container'

class Login extends Container {
  requestForgotten(){
    this.dispatch({type: "MODAL_OPENED", modal: "forgottenModal"})
  }
  render(){
    let language = this.props.state.language
    let forgotten = {eng: "Forgotten password?", hun: "Elfelejtett jelszó?"}
    let login = {eng: "Login", hun: "Bejelentkezés"}
    let username = {eng: "Username", hun: "Felhasználónév"}
    let password = {eng: "Password", hun: "Jelszó"}
    return (
      <div className={"login"}>
        <LoginLogo/>
        <LoginInput placeholder={username[language]}/>
        <LoginInput placeholder={password[language]}/>
        <div className={"forgotten"}>
          <button className={"link-button"} onClick={()=>this.requestForgotten()}>{forgotten[language]}</button>
        </div>
        <div className={"login-button"}>
          <button className={"maxoft-button"}>
            <i className="material-icons md-12 icon-align">vpn_key</i>
            {login[language]}
          </button>
        </div>
      </div>
    )
  }

}

export default Login

const LoginLogo = (props) => (
  <div className={"login-logo"}>
    <h2>(MaXoft Logo)</h2>
  </div>
)

const LoginInput = (props) => (
  <div className={"login-input"}>
    <input placeholder={props.placeholder}/>
  </div>
)
