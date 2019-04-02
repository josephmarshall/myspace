import React from 'react'
import UserCard from './UserCard'
import { AuthConsumer } from '../providers/AuthProvider'
import Posts from './Posts'
import { Link, } from 'react-router-dom'
import TopFriends from './TopFriends'
import SelectedPost from './SelectedPost'

class User extends React.Component {
  state = {postSelected: null}

  selectPost = (post) => {
    this.setState({postSelected: post})
  } 

  cancelSelectPost = () => {
    this.setState({postSelected: null})
  }
  
  render(){
    const { postSelected, } = this.state
    return(
      <>
        <div style={{display: "flex", border: "solid white 3px"}}>
          <div style={{height: "90vh"}}>
            <Link as='div' to='/User/Settings' style={{height: '50vh'}}>
              <UserCard data={this.props.auth.user} />
            </Link>
            <h2 style={{textAlign: "center", marginBottom: 0}}>Friends</h2>
            <div style={{height: "43vh", overflow: "scroll"}}>
              <TopFriends />
            </div>
          </div>
            <div style={{width: "100%"}}>
            { postSelected ? 
            <SelectedPost post={postSelected} cancel={this.cancelSelectPost} />
            :
            <Posts selectPost={this.selectPost} />
            }
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