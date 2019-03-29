import React from 'react';
import { Button, Header, Icon, Image, Table } from 'semantic-ui-react';
import FriendPosts from './FriendPosts';
import TopFriends from './TopFriends';

class Friends extends React.Component {
  render () {
    return(
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div >
          <TopFriends />
          <hr style={{margin: "5px", borderColor: "#770202" }}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{textAlign: "center"}}>Search </h2>
            <input value="Newman"></input>
            <div>
            <Table basic='very' collapsing>
              <Table.Body>
              <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src='http://www.seinfeldscripts.com/images/newman1.jpg' rounded size='medium' />
                      <Header.Content>
                        Newman
                        <Header.Subheader>Mail Worker</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Button inverted color="blue" style={{padding: 0, borderRadius: "30px", height: "35px", width: "35px",}}><Icon style={{margin: 0}} name="add"></Icon></Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            </div>
          </div>
        </div>
        <div style={{width: "80%", height: "90vh", border: "solid black 1px", padding: "20px"}}>
          <h1 style={{textAlign: "center"}}>Friend Section</h1>
          <FriendPosts />
        </div>
      </div>
    )
  }
}

export default Friends
