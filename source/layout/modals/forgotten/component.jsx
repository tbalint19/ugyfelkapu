import React from 'react'
import Modal from 'maxoftModal'

class ForgottenModal extends Modal {
  content(){
    let language = this.props.state.language
    let title = {eng: "Reset forgotten password", hun: "Elfelejtett jelszó visszaállítása"}
    let email = {eng: "Email address", hun: "Email cím"}
    let cancel = {eng: "Cancel", hun: "Mégse"}
    let reset = {eng: "Reset", hun: "Visszaállítás"}
    let info = {
      eng: "Please enter your username. An email will be sent with the necessary info to the related email.",
      hun: "Kérem adja meg a felhasználónevet. Az ehhez rendelt email címre fogjuk küldeni a módosításhoz szükséges tudnivalókat."}
    return (
      <div>
        <h4>{title[language]}</h4>
        <input placeholder={email[language]}/>
        <button onClick={()=>this.close()} className={"maxoft-button"}>{cancel[language]}</button>
        <button onClick={()=>this.close()} className={"maxoft-button"}>{reset[language]}</button>
        <p>{info[language]}</p>
      </div>
    )
  }
}

export default ForgottenModal
