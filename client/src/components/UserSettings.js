import React from 'react'
import { Form, Button, Container, Icon, Modal, } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserData from './UserData'
import { AuthConsumer, } from '../providers/AuthProvider'

class UserSettings extends React.Component {
  state = { name: this.props.auth.user && this.props.auth.user.name,
            nickname: this.props.auth.user && this.props.auth.user.nickname,
            image: this.props.auth.user && this.props.auth.user.image,
            email: this.props.auth.user && this.props.auth.user.email,
            userCardModalOpen: false,
          }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  toggleUserCardModalOpen = () => this.setState({userCardModalOpen: !this.state.userCardModalOpen})

  handleSubmit = (e) => {
    e && e.preventDefault()
    const { auth: { handleUpdate} , history } = this.props
    const user = { ...this.state, id: this.props.auth.user.id }
    handleUpdate(user, history)
  }

  render (){
    const { name, nickname, image, email } = this.state
    return(
      <Container style={{padding: "10px"}}>
        <h1>User Settings</h1>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{width: "100%", padding: "10px"}}>
            <Form>
              <Form.Input
                autoFocus
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label="Nickname"
                name="nickname"
                value={nickname}
                onChange={this.handleChange}
                />
              <Form.Input
                label="Profile Image URL"
                name="image"
                value={image}
                onChange={this.handleChange}
                />
              <h3>
                Email Address: {email}
              </h3>
              <Button disabled>
                Reset Account Password
              </Button>
            </Form>
          </div>
          <div onClick={() => this.toggleUserCardModalOpen()}>
            <UserCard data={this.state} />
          </div>
          <Modal onClick={()=>this.toggleUserCardModalOpen()} open={this.state.userCardModalOpen} onClose={()=>this.toggleUserCardModalOpen()}>
            <Modal.Content>
              <UserData data={this.state} closeModal={this.state.toggleUserCardModalOpen}/>
            </Modal.Content>
          </Modal>
        </div>
        <hr style={{borderColor: "#770202"}} />
        <Button style={{float: "right"}} onClick={()=>this.handleSubmit()}><Icon color="blue" name="user"/>Submit</Button>
        <Button style={{float: "right"}} onClick={()=>this.props.history.push('/User')}><Icon color="red" name="cancel"/>Cancel</Button>
      </Container>
    )
  }
}

const ConnectedUserSettings = (props) => (
  <AuthConsumer>
    {auth => <UserSettings {...props} auth={auth}/>}
  </AuthConsumer>
)

export default ConnectedUserSettings