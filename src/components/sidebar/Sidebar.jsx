import { AttachMoney, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 100px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
color: #555;
padding: 20px;
`;
const Menu = styled.div`
margin-bottom: 20px;
`;
const Title = styled.h3`
font-size: 13px;
  color: rgb(187, 186, 186);
`;
const List = styled.ul`
list-style: none;
`;
const ListItem = styled.li`
display: flex;
align-items: center;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <LineStyle style={{marginRight: '5px', fontSize: "20px"}} />
              Home
            </ListItem>
            <ListItem>
              <Timeline style={{marginRight: '5px', fontSize: "20px"}}/>
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{marginRight: '5px', fontSize: "20px"}}/>
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <PermIdentity style={{marginRight: '5px', fontSize: "20px"}}/>
              Users
            </ListItem>
            <ListItem>
              <Storefront style={{marginRight: '5px', fontSize: "20px"}}/>
              Products
            </ListItem>
            <ListItem>
              <AttachMoney style={{marginRight: '5px', fontSize: "20px"}}/>
              Transactions
            </ListItem>
            <ListItem>
              <TrendingUp style={{marginRight: '5px', fontSize: "20px"}}/>
              Report
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline style={{marginRight: '5px', fontSize: "20px"}}/>
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{marginRight: '5px', fontSize: "20px"}}/>
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline style={{marginRight: '5px', fontSize: "20px"}}/>
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline style={{marginRight: '5px', fontSize: "20px"}}/>
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{marginRight: '5px', fontSize: "20px"}}/>
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{marginRight: '5px', fontSize: "20px"}}/>
              Transactions
            </ListItem>
            <ListItem>
              <Report style={{marginRight: '5px', fontSize: "20px"}}/>
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
