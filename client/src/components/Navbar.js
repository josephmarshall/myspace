import React from 'react'
import { Menu, Dropdown, Icon, } from 'semantic-ui-react'  
import { NavLink, } from 'react-router-dom'
import { AuthConsumer, } from '../providers/AuthProvider'
import { withRouter, } from 'react-router-dom'
import UserTitle from './UserTitle'

class Navbar extends React.Component{

  render(){
    const { auth: { user, handleLogout }, history } = this.props

  return(
    <>
    <Menu inverted style={{ borderRadius: 0, margin: 0, }} >
      <NavLink to="/">
        <Menu.Item ><Icon size="large" name="home" />Home</Menu.Item>
      </NavLink>
      { user &&
      <>
        <NavLink to="/User">
          <Menu.Item ><Icon size="large" name="newspaper outline" />My Posts</Menu.Item>
        </NavLink>
        <NavLink to="/Friends">
          <Menu.Item><Icon size="large" name="users"/>Friends</Menu.Item>
        </NavLink>
      </>
      }
      <UserTitle />
      <Menu.Menu position="right">
        { user ? 
          <> 
            <Dropdown item icon="user" size="large" text="User">
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>history.push('/User/Settings')} ><Icon name="cogs" size="large" />Settings</Dropdown.Item>
                <hr />
                <Dropdown.Item onClick={()=>handleLogout(history)} ><Icon name="sign out" size="large" />Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>    
        :
          <>
            <NavLink to="/User/Login">
              <Menu.Item >Login      
              </Menu.Item>
            </NavLink>
            <NavLink to="/User/Register">
              <Menu.Item >Register      
              </Menu.Item>
            </NavLink>
          </>          
        }
      </Menu.Menu>
    </Menu>
    <div style={{width: "100%", height: "8px", backgroundImage: "linear-gradient(to left, gray, #ffb600)"}}></div>
    </>
    )  
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth => <Navbar {...props} auth={auth} /> }
  </AuthConsumer>
)

export default withRouter(ConnectedNavbar)

