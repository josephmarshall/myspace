import React from 'react'
import { Form, Modal, Button, Icon } from 'semantic-ui-react'
import { AuthConsumer, } from '../providers/AuthProvider'

class Register extends React.Component {
  state = { modalOpen: true,
            email: "",
            password: "",
            passwordConfirmation: "",
            passwordMatch: false }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, ()=>{
      const { password, passwordConfirmation } = this.state
      if (password === passwordConfirmation)
      this.setState({passwordMatch: true})
      else this.setState({passwordMatch: false})
    })
  }

  handlSubmit = (e) => {
    e && e.preventDefault()
    const { email, password, } = this.state
    const { auth: { handleRegister, }, history, } = this.props
    this.state.passwordMatch && handleRegister({ email, password, }, history)
  }

  render(){
    const { modalOpen, email, password, passwordConfirmation } = this.state
    return(
      <Modal open={modalOpen}>
        <Modal.Header>Register New User</Modal.Header>
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
            <Form.Input
              required
              label="Password Confirmation"
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={this.handleChange}
              />
            <Modal.Actions>
              {this.state.passwordMatch ?
              <Button style={{float: "right"}} onClick={this.handlSubmit}><Icon color="blue" name="user"/>Submit</Button>
              :<Button disabled style={{float: "right"}}><Icon name="user"/>Submit</Button>}
              <Button style={{float: "right"}} onClick={()=>this.props.history.push('/')}><Icon color="red" name="cancel"/>Cancel</Button>
              <div style={this.state.passwordMatch ? {visibility: "hidden"} : {color: "red"}}>Passwords Do Not Match</div>
            </Modal.Actions>
            <br />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    {auth => <Register {...props} auth={auth}/>}
  </AuthConsumer>
)

export default ConnectedRegister