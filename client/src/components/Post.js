import React from 'react'
import { Icon, } from 'semantic-ui-react'

const Post = ( {post, post: { title, body, likes, id }, deletePost, setPostToEdit, selectPost } ) => (
  <>
    { deletePost && <>
    <Icon name="delete" onClick={()=>deletePost(id)} color="red" style={{float: "right"}} />
    <Icon name="edit" onClick={()=>setPostToEdit(post)} color="blue" style={{float: "right"}} /> </>}
    <div onClick={()=>selectPost(post)}>
      <h1 style={{color: "#770202"}}>{title}</h1>
      <p>{body}</p>
    </div>
    <div style={{textAlign: "right"}}>
       {likes} Likes
          <Icon name="chevron up" color="green" />
          <Icon name="chevron down" color="red" />
    </div>
    <hr style={{borderColor: "#770202"}} />
  </>
)

export default Post