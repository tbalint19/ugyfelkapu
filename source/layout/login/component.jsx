import React from 'react'
import Container from 'container'

class Login extends Container {

  render(){
    return (
      <div className={"login"}>
        <LoginLogo/>
        <LoginInput placeholder={"username"}/>
        <LoginInput placeholder={"password"}/>
        <div className={"forgotten"}>
          <button className={"link-button"}>Forgotten password?</button>
        </div>
        <div className={"login-button"}>
          <button className={"maxoft-button"}>
            <i className="material-icons md-12 icon-align">vpn_key</i>
            Login
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
