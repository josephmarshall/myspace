import React from 'react'
import axios from 'axios'
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
        <div style={{height: "70%"}}>
          <div style={{width: "100%", height: "60vh", padding: "10px", overflow: "scroll"}}>
          { this.props.posts.map(p=><Post post={p} />) }
          <div ref={el => { this.el = el }} />
          </div>
        </div>
        <div style={{height: "30%", border: "solid red 1px"}}>
          Comment Form
        </div>
      </div>
    )
  }
}

export default FriendPosts