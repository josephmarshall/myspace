import React from 'react'
import axios from 'axios'
import Post from './Post'
import { AuthConsumer } from '../providers/AuthProvider'
import PostForm from './PostForm'

class Posts extends React.Component{
state = {posts: [],
         editPost: ""}

componentDidMount(){
  axios.get('/api/posts')
    .then(res => this.setState({ posts: res.data }))
  this.scrollToBottom()
}

componentDidUpdate() {
  this.scrollToBottom();
}

scrollToBottom() {
  this.el.scrollIntoView({ behavior: 'smooth' });
}

addPost = (post) => {
  const user_id = this.props.auth.user.id
  axios.post('/api/posts', {...post, user_id, } )
    .then(res => this.setState({ posts: [...this.state.posts, res.data] }))
}

setPostToEdit = (post) => {
this.setState({editPost: post})
}

cancelEdit = () => {
  this.setState({editPost: null})
}

editPost = (post) => {
  const user_id = this.props.auth.user.id
  axios.put(`/api/posts/${post.id}`, {...post, user_id, })
    .then(res => this.setState({ posts: this.state.posts.map(p=>{
      if (p.id === post.id) 
      return post
    return p })}))
  this.cancelEdit()
}

deletePost = (id) => {
  axios.delete(`/api/posts/${id}`)
    .then(res => this.setState({ posts: this.state.posts.filter(p=> p.id !== id)}))
}

selectPost = () => {
  return null
}
  render(){
    return(
      <>
        <div style={{width: "100%", height: "65vh", padding: "10px", overflow: "scroll"}}>
        { this.state.posts.map(p=><Post 
            addPost={this.addPost} 
            setPostToEdit={this.setPostToEdit} 
            deletePost={this.deletePost} post={p} 
            selectPost={this.selectPost} />) }
        <div ref={el => { this.el = el }} />
        </div>
        <PostForm addPost={this.addPost} editPost={this.editPost} post={this.state.editPost} cancelEdit={this.cancelEdit} />
      </>
    )
  }
}

const ConnectedPosts = (props) => (
  <AuthConsumer>
    { auth => <Posts {...props} auth={auth}/>}
  </AuthConsumer>
)

export default ConnectedPosts