import React from 'react'
import { Image, Header } from 'semantic-ui-react'

const FriendTitle = ({data, toggleLarge}) => (
  <div onClick={()=>toggleLarge()} style={{display: 'flex', alignItems: "center"}}>
  <Image src={data.image} rounded style={{height: "80px"}}/>
  <Header style={{marginLeft: "20px"}}>{data.name}</Header>
 </div>
) 

export default FriendTitle
