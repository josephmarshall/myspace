import React from 'react'
import { Card, Image, Icon, } from 'semantic-ui-react'
import defaultUserImage from './default_user.png'

const UserCard = ( {data: {name, nickname, image, email, }, } ) => (  
  <Card style={{border: "solid black 1px"}}>
    { !image ? 
    <Image src={defaultUserImage} />
    : <Image src={image} />
    }
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
      <span className='date'>{nickname}</span>
      </Card.Meta>
      <Card.Description>Email: {email}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <Icon name='user' />
      4 Friends
      </a>
    </Card.Content>
  </Card>
)

export default UserCard