import React from 'react'
import UserCard from './UserCard'
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'
import { Link, } from 'react-router-dom'

import Friends from './Friends'

class User extends React.Component {
  render(){
    return(
      <>
        <div style={{width: "100%", height: "8px", backgroundImage: "linear-gradient(to left, gray, #ffb600)"}}></div>
        <div style={{display: "flex", border: "solid white 3px"}}>
          <div style={{height: "90vh"}}>
            <Link as='div' to='/User/Settings'>
              <UserCard data={this.props.auth.user} />
            </Link>
            <div style={{height: "42%"}}>
              <Friends />
            </div>
          </div>
            <div style={{width: "100%"}}>
              <Posts />
            </div>
        </div>
      </>
    )
  }
}

const ConnectedUser = (props) => (
  <AuthConsumer>
    { auth => <User {...props} auth={auth} /> }
  </AuthConsumer>
)

export default ConnectedUser