import React from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

class Friends extends React.Component{
  render(){
    return(
        <div style={{padding: "20px"}}>
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Friends</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://media1.fdncms.com/metrotimes/imager/u/blog2x/4561509/screen_shot_2017-07-14_at_10.32.33_am.png' rounded size='medium' />
                    <Header.Content>
                      Jerry
                      <Header.Subheader>Comedian</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://upload.wikimedia.org/wikipedia/en/3/33/Elaine-benes-3707.jpg' rounded size='medium' />
                    <Header.Content>
                      Elaine
                      <Header.Subheader>Personal Assistant</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://vignette.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest/scale-to-width-down/250?cb=20110406222711' rounded size='medium' />
                    <Header.Content>
                      George
                      <Header.Subheader>Yankees Manager</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='http://www.seinfeldscripts.com/images/newman1.jpg' rounded size='medium' />
                    <Header.Content>
                      Newman
                      <Header.Subheader>Main Worker</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
    )
  }
}

export default Friends