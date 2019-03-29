import React from 'react'
import { Table, Header, Image, Icon } from 'semantic-ui-react'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'

class TopFriends extends React.Component{
  state = { friends: [], friendships: [] }

  componentDidMount(){
    this.setFriends()
    this.setFriendships()
  }

  setFriends = () => {
    axios.get('/api/get_friends')
      .then(res=> this.setState({friends: res.data}))
  }

  setFriendships = () => {
    axios.get('/api/get_friendships')
      .then(res=>this.setState({friendships: res.data}))
  }

  destroyFriendship = (friend) => {
    const friendshipArray = this.state.friendships.filter(f=> f.friend_id === friend.id)
    const friendshipId = friendshipArray[0] && friendshipArray[0].id
    axios.delete(`/api/friendships/${friendshipId}`)
      .then(() => this.setFriends())
  }

  render(){
    return(
        <div style={{padding: "20px"}}>
          <h2 style={{textAlign: "center", margin: 0 }}>Friends</h2>
          <Table style={{marginTop: 0}} basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.state.friends.map(f=> 
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src={f.image} rounded size='medium' />
                    <Header.Content>
                      {f.name}
                      <Header.Subheader>{f.nickname}</Header.Subheader>
                    </Header.Content>
                  </Header>
                  <Icon onClick={()=>this.destroyFriendship(f)} style={{float: "right", marginLeft: "30px"}} name="delete" color="red" />
                </Table.Cell>
              </Table.Row>
                )}
            </Table.Body>
          </Table>
        </div>
    )
  }
}

const ConnectedTopFriends = (props) => (
  <AuthConsumer>
    {auth => <TopFriends {...props} auth={auth} />}
  </AuthConsumer>
)

export default ConnectedTopFriends