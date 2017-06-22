import React from 'react'
import Container from 'container'

class Users extends Container {
  componentWillMount(){
    let action = {type: "USERS_ARRIVED"}
    let requestUsers = {method: "GET", destination: 'getUsers', action: action}
    this.JSONtransfer(requestUsers)
  }
  selectUser(id){
    this.dispatch({type: "USER_SELECTED", id: id})
  }
  reportChange(){
    
  }
  render() {
    let users = this.props.data.users
    let selectedRoles = this.props.state.selectedRoles
    let language = this.props.state.language
    let firm = {eng: "Firm", hun: "Cég"}
    let title = {eng: "Title", hun: "Cím"}
    let name = {eng: "Name", hun: "Név"}
    let birth = {eng: "Birth date", hun: "Szül. dátum"}
    let username = {eng: "Username", hun: "Felhasználónév"}
    let password = {eng: "Password", hun: "Jelszó"}
    let regDate = {eng: "Reg. date", hun: "Reg. dátum"}
    let logoTitle = {eng: "Users", hun: "Felhasználók"}
    let filterU = {eng: "Filter by role", hun: "Szűrés szerepekre"}
    let newU = {eng: "Add new user", hun: "Új felhasználó"}
    return (
      <div className={"users"}>
        <div className={"users-header"}>
          <div className={"users-header-first-row"}>
            <UsersLogo title={logoTitle[language]}/>
            <div className={"users-header-buttons"}>
              <FilterButton name={filterU[language]}/>
              <NewUserButton name={newU[language]}/>
            </div>
          </div>
          <div className={"users-header-second-row"}>
            <p className={"filter-info"}>Only "admin"</p>
          </div>
          <div className={"search-bars"}>
            <SearchField placeholder={"ID"} width={50} disabled={false}/>
            <SearchField placeholder={firm[language] + " ID"} width={50} disabled={false}/>
            <SearchField placeholder={title[language]} width={50} disabled={true}/>
            <SearchField placeholder={name[language]} width={150} disabled={false}/>
            <SearchField placeholder={birth[language]} width={100} disabled={false}/>
            <SearchField placeholder={username[language]} width={150} disabled={false}/>
            <SearchField placeholder={password[language]} width={100} disabled={true}/>
            <SearchField placeholder={regDate[language]} width={100} disabled={true}/>
          </div>
        </div>
        <div className={"user-list"}>
          {users.map((u) => (
            <User user={u} action={()=>this.selectUser(u.id)} key={u.id}/>
          ))}
        </div>
      </div>
    )
  }

}

export default Users

const UsersLogo = (props) => (
  <div className={"users-logo"}>
    <h3>(MaXoft Logo)&nbsp;-&nbsp;<span className={"users-title"}>{props.title}</span></h3>
  </div>
)

const FilterButton = (props) => (
  <div>
    <button className={"maxoft-button filter-button"}>
      <i className="material-icons icon-align md-12">reorder</i>
      {props.name}
    </button>
    <button className={"maxoft-button filter-delete-button"}>
      <i className="material-icons icon-align md-12">backspace</i>
    </button>
  </div>
)

const NewUserButton = (props) => (
  <div className={"new-user"}>
    <button className={"maxoft-button"}>
      <i className="material-icons icon-align md-12">person_add</i>
      {props.name}
    </button>
  </div>
)

const SearchField = (props) => (
  <div className={"search-field"}>
    <input
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={"search-bar-input"}
      style={{width: props.width}}/>
  </div>
)

const User = (props) => (
  <div className={"user-row"} onClick={props.action}>
    <div style={{width: "50px"}}>{props.user.id}</div>
    <div style={{width: "50px"}}>{props.user.firmId}</div>
    <div style={{width: "50px"}}>{props.user.title}</div>
    <div style={{width: "150px"}}>{props.user.name}</div>
    <div style={{width: "100px"}}>{props.user.birthDate}</div>
    <div style={{width: "150px"}}>{props.user.username}</div>
    <div style={{width: "100px"}}>{props.user.password}</div>
    <div style={{width: "100px"}}>{props.user.regDate}</div>
  </div>
)
