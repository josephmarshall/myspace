import React from 'react'
import Post from './Post'
import Comment from './Comment'
import CommentForm from './CommentForm'
import axios from 'axios'

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

  render(){
    return(
      <>
      <div style={{height: "80vh", border: "solid 1px gray"}}>
      <Post post={this.props.post} />
        <div style={{height: "50%", borderLeft: "solid 1px blue", paddingLeft: "20px"}}>
          <div style={{maxHeight: "60%", overflow: "scroll"}}>
            {this.state.comments.map(c=> <Comment data={c} />)}
            <hr />
          </div>
          <div>
            Add Comment:
            <CommentForm post_id={this.props.post.id} addComment={this.addComment}/>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default SelectedPost