import React from 'react'
import { Icon } from 'semantic-ui-react'

const Comment = ( {data: { body, likes }} ) => (
  <div>
    {body}
    <div style={{textAlign: "right"}}>
       {likes} Likes
          <Icon name="chevron up" color="green" />
          <Icon name="chevron down" color="red" />
    </div>
    <hr />
  </div>
)

export default Comment