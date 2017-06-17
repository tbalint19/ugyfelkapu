import React from 'react'
import Container from 'container'

class MainController extends Container {

  render() {
    return (
      <div className={"main-controller"}>
        <OptionsLogo/>
        <div className={"options"}>
          <Option name={"Master-data"} icon={"contacts"}/>
          <Option name={"Self-service"} icon={"shopping_cart"}/>
          <Option name={"e-Payroll"} icon={"credit_card"}/>
          <Option name={"e-Cafeteria"} icon={"card_giftcard"}/>
        </div>
        <div className={"controller"}>
          <ControllerButton name={"Users"} icon={"group_add"}/>
          <ControllerButton name={"Settings"} icon={"build"}/>
        </div>
      </div>
    )
  }

}

export default MainController

const OptionsLogo = (props) => (
  <div className={"options-logo"}>
    <h2>(MaXoft Logo)</h2>
  </div>
)

const Option = (props) => (
  <div className={"option"}>
    <div className={"icon-place"}>
      <i className="material-icons md-42">{props.icon}</i>
    </div>
    <div className={"controll-place"}>
      <p>{props.name}</p>
      <button className={"maxoft-button"}>Select</button>
    </div>
  </div>
)

const ControllerButton = (props) => (
  <div>
    <button className={"maxoft-button controller-button"}>
      <i className="material-icons md-12 icon-align icon-with-space">{props.icon}</i>
      {props.name}
    </button>
  </div>
)
