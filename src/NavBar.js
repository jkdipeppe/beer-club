import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
// import _ from 'lodash'

class NavBar extends React.Component{
  state = {

  }

  render(){
    return(
      <div style={{backgroundColor:"rgba(255,255,255,0.9)", position: "static"}}>
        {
          this.props.loggedIn ?
            <Menu tabular>
              <Menu.Item>
                <NavLink
                  to="/MemberPage"
                  exact
                  activeStyle={{background: 'lightgray'}}
                  >My Page
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  to="/AllBeers"
                  exact
                  activeStyle={{background: 'lightgray'}}
                  >All Beers
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  to="/MyBeers"
                  exact
                  activeStyle={{background: 'lightgray'}}
                  >My Beers
                </NavLink>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <NavLink
                    to="/login"
                    exact
                    activeStyle={{background: 'lightgray'}}
                    onClick={this.props.handleLogOut}
                    >Logout
                  </NavLink>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            :
            <Menu tabular>
              <Menu.Menu position="right">
                <Menu.Item>
                  <NavLink
                    to="/login"
                    exact
                    activeStyle={{background: 'lightgray'}}
                    >Login
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/NewMember"
                    exact
                    activeStyle={{background: 'lightgray'}}
                    >New Member
                  </NavLink>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
        }
      </div>
    )
  }
}

export default NavBar
