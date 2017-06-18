import React from 'react'
import Container from 'container'

class Users extends Container {

  render() {
    let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
    let user = {
      id: 57, firmid: 32, title: "Mr.", name: "Kovács Béla", birth: "1991.01.01",
      username: "kovacs.bela.whatever", password: "123456", reg: "2017.01.01"}
    return (
      <div className={"users"}>
        <div className={"users-header"}>
          <div className={"users-header-first-row"}>
            <UsersLogo/>
            <div className={"users-header-buttons"}>
              <FilterButton/>
              <NewUserButton/>
            </div>
          </div>
          <div className={"users-header-second-row"}>
            <p className={"filter-info"}>Only "admin"</p>
          </div>
          <div className={"search-bars"}>
            <SearchField placeholder={"ID"} width={50}/>
            <SearchField placeholder={"Firm ID"} width={50}/>
            <SearchField placeholder={"Title"} width={50}/>
            <SearchField placeholder={"Name"} width={150}/>
            <SearchField placeholder={"Birth date"} width={100}/>
            <SearchField placeholder={"Username"} width={150}/>
            <SearchField placeholder={"Password"} width={100}/>
            <SearchField placeholder={"Reg. date"} width={100}/>
          </div>
        </div>
        <div className={"user-list"}>
          {users.map((u) => (
            <User user={user}/>
          ))}
        </div>
      </div>
    )
  }

}

export default Users

const UsersLogo = (props) => (
  <div className={"users-logo"}>
    <h3>(MaXoft Logo)&nbsp;-&nbsp;<span className={"users-title"}>Users</span></h3>
  </div>
)

const FilterButton = (props) => (
  <div>
    <button className={"maxoft-button filter-button"}>
      <i className="material-icons icon-align md-12">reorder</i>
      Filter by role
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
      Add new user
    </button>
  </div>
)

const SearchField = (props) => (
  <div className={"search-field"}>
    <input placeholder={props.placeholder} className={"search-bar-input"} style={{width: props.width}}/>
  </div>
)

const User = (props) => (
  <div className={"user-row"}>
    <div style={{width: "50px"}}>{props.user.id}</div>
    <div style={{width: "50px"}}>{props.user.firmid}</div>
    <div style={{width: "50px"}}>{props.user.title}</div>
    <div style={{width: "150px"}}>{props.user.name}</div>
    <div style={{width: "100px"}}>{props.user.birth}</div>
    <div style={{width: "150px"}}>{props.user.username}</div>
    <div style={{width: "100px"}}>{props.user.password}</div>
    <div style={{width: "100px"}}>{props.user.reg}</div>
  </div>
)
