import React from 'react';
import FriendPosts from './FriendPosts'
import FriendsPageFriends from './FriendsPageFriends'
import People from './People'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'
import UserData from './UserData'
import { Modal, } from 'semantic-ui-react'
import FriendTitle from './FriendTitle'
import SelectedPost from './SelectedPost'

class Friends extends React.Component {

  state = { people: [], friends: [],
            friendViewModalOpen: false,
            friendForFriendView: {},
            friendPosts: [],
            postSelected: null }

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
    this.setState({postSelected: null})
  }

  selectPost = (post) => {
    this.setState({postSelected: post})
  } 

  render () {
    const { postSelected, friendPosts, friendForFriendView, friendViewModalOpen, toggleFriendViewModalOpen } = this.state
    return(
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{height: "100vh", borderRight: "solid 3px #770202", overflow: "scroll"}}>
          <FriendsPageFriends setFriendForFriendView={this.setFriendForFriendView} friends={this.state.friends} />
          <hr style={{margin: "5px", borderColor: "#770202" }}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{textAlign: "center", marginTop: "10px"}}>Search </h2>
            <input></input>
            <People addFriendship={this.addFriendship} people={this.state.people} />
          </div>
        </div>
        <div style={{width: "80%", height: "90vh", padding: "15px"}}>
          <h1 style={{textAlign: "center"}}><FriendTitle data={this.state.friendForFriendView} toggleLarge={this.toggleFriendViewModalOpen} /></h1>
          <hr style={{borderColor: "#770202"}} />
          { postSelected ? 
            <SelectedPost post={postSelected} />
            :
            <FriendPosts posts={friendPosts} selectPost={this.selectPost} />
          }
        </div>
        <Modal onClick={()=>this.toggleFriendViewModalOpen()} open={friendViewModalOpen} onClose={()=>this.toggleFriendViewModalOpen()}>
          <Modal.Content>
            <UserData data={friendForFriendView} closeModal={toggleFriendViewModalOpen}/>
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
