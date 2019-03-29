import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

class FriendsPageFriends extends React.Component{

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
              { this.props.friends.map(f=> 
              <Table.Row onClick={()=>this.props.setFriendForFriendView(f)}>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src={f.image} rounded size='medium' />
                    <Header.Content>
                      {f.name}
                      <Header.Subheader>{f.nickname}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
                )}
            </Table.Body>
          </Table>
        </div>
    )
  }
}

export default FriendsPageFriends