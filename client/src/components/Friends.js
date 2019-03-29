import React from 'react';
import FriendPosts from './FriendPosts'
import FriendsPageFriends from './FriendsPageFriends'
import People from './People'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'
import UserData from './UserData'
import { Modal, } from 'semantic-ui-react'
import FriendTitle from './FriendTitle'

class Friends extends React.Component {

  state = { people: [], friends: [],
            friendViewModalOpen: false,
            friendForFriendView: {},
            friendPosts: [] }

  componentDidMount(){
    this.getFriendsAndPeople()
  }

  addFriendship = (friend_id) => {
    axios.post('/api/friendships', {user_id: this.props.auth.user.id, friend_id, })
      .then(()=> this.getFriendsAndPeople())
  }

  getFriendsAndPeople = () => {
    axios.get('/api/get_friends')
    .then(res=> this.setState({friends: res.data}))

    axios.get('/api/friendships')
    .then(res=> this.setState({people: res.data}))
  }

  toggleFriendViewModalOpen = () => {
    this.setState({friendViewModalOpen: !this.state.friendViewModalOpen})
  }

  setFriendForFriendView = (friend) => {
    this.setState({friendForFriendView: friend}, ()=>{
      axios.get(`/api/index_of_friend_posts/${friend.id}`)
      .then(res => this.setState({friendPosts: res.data}))
    })
  }

  render () {
    return(
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div >
          <FriendsPageFriends setFriendForFriendView={this.setFriendForFriendView} friends={this.state.friends} />
          <hr style={{margin: "5px", borderColor: "#770202" }}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{textAlign: "center", marginTop: "10px"}}>Search </h2>
            <input></input>
            <People addFriendship={this.addFriendship} people={this.state.people} />
          </div>
        </div>
        <div style={{width: "80%", height: "90vh", border: "solid black 1px", padding: "20px"}}>
          <h1 style={{textAlign: "center"}}><FriendTitle data={this.state.friendForFriendView} toggleLarge={this.toggleFriendViewModalOpen} /></h1>
          <hr style={{borderColor: "#770202"}} />
          <FriendPosts posts={this.state.friendPosts} />
        </div>
        <Modal onClick={()=>this.toggleFriendViewModalOpen()} open={this.state.friendViewModalOpen} onClose={()=>this.toggleFriendViewModalOpen()}>
          <Modal.Content>
            <UserData data={this.state.friendForFriendView} closeModal={this.state.toggleFriendViewModalOpen}/>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

const ConnectedFriends = (props) => (
  <AuthConsumer>
    {auth => <Friends {...props} auth={auth} />}
  </AuthConsumer>
)
export default ConnectedFriends
