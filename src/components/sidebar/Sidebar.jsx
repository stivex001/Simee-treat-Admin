import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Container,
  List,
  ListItem,
  Menu,
  Title,
  Wrapper,
} from "./sidebar.styles";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link style={{textDecoration: "none", color: "inherit"}} to="/">
              <ListItem>
                <LineStyle style={{ marginRight: "5px", fontSize: "20px" }} />
                Home
              </ListItem>
            </Link>

            <ListItem>
              <Timeline style={{ marginRight: "5px", fontSize: "20px" }} />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ marginRight: "5px", fontSize: "20px" }} />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link style={{textDecoration: "none", color: "inherit"}} to="/users">
              <ListItem>
                <PermIdentity
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Users
              </ListItem>
            </Link>

            <ListItem>
              <Storefront style={{ marginRight: "5px", fontSize: "20px" }} />
              Products
            </ListItem>
            <ListItem>
              <AttachMoney style={{ marginRight: "5px", fontSize: "20px" }} />
              Transactions
            </ListItem>
            <ListItem>
              <TrendingUp style={{ marginRight: "5px", fontSize: "20px" }} />
              Report
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline style={{ marginRight: "5px", fontSize: "20px" }} />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{ marginRight: "5px", fontSize: "20px" }} />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline style={{ marginRight: "5px", fontSize: "20px" }} />
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{ marginRight: "5px", fontSize: "20px" }} />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ marginRight: "5px", fontSize: "20px" }} />
              Transactions
            </ListItem>
            <ListItem>
              <Report style={{ marginRight: "5px", fontSize: "20px" }} />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
