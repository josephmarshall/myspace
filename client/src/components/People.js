import React from 'react'
import { Button, Header, Icon, Image, Table } from 'semantic-ui-react'
import axios from 'axios'

class People extends React.Component{


  render(){
    const { addFriendship } = this.props
    return(
      <div style={{padding: "10px"}}>
      <Table basic='very' collapsing>
        <Table.Body>
        { this.props.people.map(p=> 
        <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image src={p.image} rounded size='medium' />
                <Header.Content>
                  {p.name}
                  <Header.Subheader>{p.nickname}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={()=>addFriendship(p.id)} inverted color="blue" style={{padding: 0, borderRadius: "30px", height: "35px", width: "35px",}}><Icon style={{margin: 0}} name="add"></Icon></Button>
            </Table.Cell>
          </Table.Row>
          )}
        </Table.Body>
      </Table>
      </div>
    )
  }
}

export default People

