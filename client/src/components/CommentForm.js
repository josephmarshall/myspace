import React from 'react'
import { Form, TextArea, Icon, Button } from 'semantic-ui-react'


class CommentForm extends React.Component {
  state= {body: ""}

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})
  
  handleCancel = () => {
    this.setState( {body: "", } )
  }

  handleSubmit = (e) => {
    //e.preventDefault()
    this.props.addComment( {...this.state, post_id: this.props.post_id})
    this.setState({body: ""})
  }

render(){
  return (
    <div>
        <Form>
          <TextArea
            autoFocus
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </Form>
        <div style={{display: "flex", justifyContent: "flex-end", padding: "10px"}}>
          <Button onClick={()=>this.handleSubmit()}><Icon name="checkmark" color="green" />Add Comment</Button>
          <Button onClick={()=>this.handleCancel()}><Icon name="cancel" color="red"/>Cancel</Button>
        </div>
    </div>
  )
}
}

export default CommentForm