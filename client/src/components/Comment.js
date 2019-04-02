import React from 'react'
import { Icon, Image } from 'semantic-ui-react'
import axios from 'axios'

class Comment extends React.Component{
  state = {userData: ""}

  componentDidMount(){
    const { post_id, data: {id} } = this.props
    axios.get(`/api/posts/${post_id}/comments/${id}/user_info_lookup`)
      .then(res => this.setState({userData: res.data}))
  }

  render(){
    const { name, image } = this.state.userData
    const { body, likes } = this.props.data
    return(
    <div>
      <div style={{display: "flex"}}>
        <Image src={image} style={{height: "3em", borderRadius: "50px"}} />
        <div style={{padding: "5px"}}>
          <div style={{fontWeight: "bold"}}>
            {name}
          </div>
          <div>
            {body}
          </div>
        </div>
      </div>
      <div style={{textAlign: "right"}}>
         {likes} Likes
            <Icon name="chevron up" color="green" />
            <Icon name="chevron down" color="red" />
      </div>
      <hr />
    </div>
    )
  }
}

export default Comment