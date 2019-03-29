import React from 'react'

class FriendPosts extends React.Component {
  render(){
    return(
      <div style={{height: "100%"}}>
        <div style={{height: "70%", border: "solid blue 1px"}}>
          Posts Of Selected Friend
        </div>
        <div style={{height: "30%", border: "solid red 1px"}}>
          Comment Form
        </div>
      </div>
    )
  }
}

export default FriendPosts