import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container, } from 'semantic-ui-react'
import Home from './components/Home'
import User from './components/User'
import NoMatch from './components/NoMatch'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import UserSettings from './components/UserSettings'
import { AuthConsumer, } from './providers/AuthProvider'
// import ProtectedRoute from './components/ProtectedRoute'
import FetchUser from './components/FetchUser'
import Friends from './components/Friends'

class AppRouter extends Component {
  render() {
    const { user } = this.props.auth
    return (
      <div style={{background: "#770202", minHeight: "100vh", minWidth: "100vw", position: "fixed", top: 0, left: 0}}>
        <Container style={{background: "white", minHeight: "100vh"}}>
          <FetchUser>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/User/Register" component={Register} />
              <Route exact path="/User/Login" component={Login} />
              <Route exact path="/User/Logout" component={Logout} />
              { user &&
                <>
                  <Route exact path="/User" component={User} />
                  <Route exact path="/User/Settings" component={UserSettings} />
                  <Route exact path="/Friends" component={Friends} />
                </>
              }
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </Container>
      </div>
    );
  }
}

const ConnectedAppRouter = (props) => (
  <AuthConsumer>
    {auth => <AppRouter {...props} auth={auth}/>
    }
  </AuthConsumer>
)
export default ConnectedAppRouter;
