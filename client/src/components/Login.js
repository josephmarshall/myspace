import React from 'react'
import { Form, Modal, Button, Icon } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'

class Login extends React.Component {
  state = { modalOpen: true,
            email: "",
            password: "", }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  handleSubmit = (e) => {
    e && e.preventDefault()
    const { email, password, } = this.state
    const { auth: { handleLogin, }, history, } = this.props
    handleLogin({ email, password }, history)
  }

  render(){
    const { modalOpen, email, password, } = this.state
    return(
      <Modal open={modalOpen}>
        <Modal.Header>User Login</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              autoFocus
              required
              label="Email Address"
              name="email"
              value={email}
              onChange={this.handleChange}
              />
            <Form.Input
              required
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              />
              <Button style={{float: "right"}} onClick={()=>this.handleSubmit()}><Icon color="blue" name="user"/>Submit</Button>
              <Button style={{float: "right"}} onClick={()=>this.props.history.push('/')}><Icon color="red" name="cancel"/>Cancel</Button>
          </Form>
          <br />
          <br />
        </Modal.Content>
      </Modal>
    )
  }
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    {auth => <Login {...props} auth={auth}/>}
  </AuthConsumer>
)

export default ConnectedLogin