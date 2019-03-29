import React from 'react'
import axios from 'axios'

const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export class AuthProvider extends React.Component {
  state = { user: null, }

  handleRegister = (user, history) => {
    axios.post('/api/auth', user)
      .then(res => {
        this.setState({user: res.data.data})
        history.push('/')
    }).catch(res => {console.log(res)})
  }

  handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user)
      .then(res=> {
        this.setState({user: res.data.data})
        history.push('/User')
      }).catch(res=> {console.log(res)})
  }

  handleLogout = (history) => {
    axios.delete('/api/auth/sign_out')
      .then(this.setState({user: null}))
      history.push('/User/Logout')
  }

  handleUpdate = (user, history) => {
    axios.put('/api/auth', user)
      .then(res => {
        this.setState({user: res.data.data})
        history.push('/User')
      }).catch(res=> {console.log(res)})
  }

  setUser = (user) => this.setState({user: user})

  render(){
    return(
      <AuthContext.Provider
        value = {{...this.state,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleUpdate: this.handleUpdate,
        setUser: this.setUser,
        }}      
      >
      { this.props.children }
      </AuthContext.Provider>
    )
  }
}

