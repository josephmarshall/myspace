import React from 'react'
import Post from './Post'
import Comment from './Comment'
import CommentForm from './CommentForm'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'

class SelectedPost extends React.Component {
  state = { comments: [] }

  componentDidMount(){
    const postId = this.props.post.id
    axios.get(`/api/posts/${postId}/comments`)
      .then(res=>this.setState({comments: res.data}))
  }

  addComment = (comment) => {
    const postId = this.props.post.id
    axios.post(`/api/posts/${postId}/comments`, comment)
      .then(res => {this.setState({comments: [res.data, ...this.state.comments]})})
  }

  commentViewHeight = () => (
    (this.props.post.user_id == this.props.auth.user.id) ? "93vh" : "81vh"
  )

  render(){
    return(
      <>
      <div style={{height: this.commentViewHeight(), overflow: "scroll", width: "100%", padding: "10px 10px 0 10px"}}>
      <Post post={this.props.post} />
        <div style={{paddingLeft: "20px"}}>
          <div>
            <h5>Comments: </h5>
            {this.state.comments.map(c=> <Comment data={c} post_id={this.props.post.id} />)}
          </div>
        </div>
        <div style={{position: "sticky", bottom: 0, background: "white"}}>
          Add Comment:
          <CommentForm post_id={this.props.post.id} addComment={this.addComment} cancel={this.props.cancel}/>
        </div>
      </div>
      </>
    )
  }
}

const ConnectedSelectedPost = (props) => (
  <AuthConsumer>
    {auth => <SelectedPost {...props} auth={auth} /> }
  </AuthConsumer>
)


export default ConnectedSelectedPost
