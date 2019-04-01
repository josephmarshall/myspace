import React from 'react'
import Post from './Post'

class FriendPosts extends React.Component {


  componentDidMount(){
    this.scrollToBottom()
  }

  componentDidUpdate(){
    this.scrollToBottom()
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render(){
    return(
      <div style={{height: "100%"}}>
        <div style={{width: "100%", height: "80vh", padding: "10px", overflow: "scroll"}}>
        { this.props.posts.map(p=><Post post={p} selectPost={this.props.selectPost}/>) }
        <div ref={el => { this.el = el }} />
        </div>
      </div>
    )
  }
}

export default FriendPosts