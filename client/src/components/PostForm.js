import React from 'react'
import { Form, TextArea, Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class PostForm extends React.Component{
  state = { title: "", body: "", id: null }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleSubmit = (e) => {
    e && e.preventDefault()
    this.state.id ? 
    this.props.editPost(this.state)
    :
    this.props.addPost(this.state)
    this.setState( {title: "", body: "", id: null } )
  }

  handleCancel = () => {
    this.props.cancelEdit()
    this.setState( {title: "", body: "", id: null} )
  }

  setEdit = () => {
    !this.state.id && this.setState({title: this.props.post.title, body: this.props.post.body, id: this.props.post.id})
  }

  render(){
    {this.props.post && this.setEdit()}
    return(
      <div style={{width: "100%", border: "solid black 1px", padding: "10px"}}>
        <h3>{this.state.id ? "Edit Post" : "New Post" }</h3>
        <Form>
          <Form.Input
            autoFocus
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <TextArea
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </Form>
        <div style={{display: "flex", justifyContent: "flex-end", padding: "10px"}}>
          <Button onClick={()=>this.handleSubmit()}><Icon name="checkmark" color="green" />Post</Button>
          <Button onClick={()=>this.handleCancel()}><Icon name="cancel" color="red"/>Cancel</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(PostForm)
