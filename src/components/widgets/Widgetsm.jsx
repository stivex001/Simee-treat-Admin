import { Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Container, Icon, Image, Username, UserTitle, WidgetButton, WidgetList, WidgetListItem, WidgetTitle, WidgetUser } from "./widgetsn.styles";


const Widgetsm = () => {

  const [users, setUsers] = useState([])

  useEffect(()=> {
    const getUser = async() => {
      try {
        const res = await userRequest.get('/users/?latest=true')
        // console.log(res.data)
        const data = Array.from(res.data)
        setUsers(data)
      }catch(error){}
    }
    getUser()
  }, [])

  return (
    <Container>
      <WidgetTitle>New Members</WidgetTitle>
      <WidgetList>
        {users.map(user => (
          <WidgetListItem key={user.id}>
          <Image src={'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg'} />
          <WidgetUser>
            <Username>{user.username}</Username>
          </WidgetUser>
          <WidgetButton>
            <Icon>
              <Visibility />
            </Icon>
            Display
          </WidgetButton>
        </WidgetListItem>
        ))}
        
      </WidgetList>
    </Container>
  );
};

export default Widgetsm;
