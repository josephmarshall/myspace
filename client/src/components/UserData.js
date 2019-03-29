import React from 'react'
import { Image, Icon, } from 'semantic-ui-react'
import defaultUserImage from './default_user.png'

const UserData = ( {data: {name, nickname, image, email, }, } ) => (  
  <div style={{display: "flex"}}>
    { !image ? 
    <Image src={defaultUserImage} />
    : <Image style={{maxHeight: "80vh"}} src={image} />
    }
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", padding: "20px", width: "100%"}}>
      <h1>{name}</h1>
      <h2>{nickname}</h2>
      <h4>Email: {email} </h4>
      <a>
        <Icon name='user' />
        4 Friends
      </a>
    </div> 
  </div>
)

export default UserData