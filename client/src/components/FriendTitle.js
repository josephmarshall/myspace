import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const FriendTitle = ({data, toggleLarge}) => (
  <div style={{display: 'flex', alignItems: "center"}}>
  <Image onClick={()=>toggleLarge()} src={data.image} rounded style={{height: "80px"}}/>
  <Header style={{marginLeft: "20px"}}>{data.name}</Header>
 </div>
) 

export default FriendTitle
