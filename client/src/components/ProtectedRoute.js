import React from 'react'
import { AuthConsumer, } from '../providers/AuthProvider'
import { Route, Redirect, } from 'react-router-dom'

const ProtectedRoute = (props) => (
  <AuthConsumer>
    { auth => (
      <Route {...props} render={ props => ( auth.authenticated ? <Component { ...props} /> : <Redirect to ={{pathname: "/"}, state: })}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute

//{ component: Component, ...rest}
// Route { ...rest } render={ props => ( Component}