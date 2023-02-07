import { CalendarViewDay, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h1``;
const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserDisplay = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  padding: 20px;
`;
const UserUpdate = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  margin-left: 50px;
  padding: 20px;
`;
const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;
const DisplayImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserDisplayTitle = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Username = styled.span`
  font-weight: 600;
`;
const UserDesc = styled.span`
  font-weight: 300;
`;
const UserDisplayBottom = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
`;
const UserInfo = styled.span`
display: flex;
align-items: center;
margin: 20px 0px;
color: #444;
`;
const UserDTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: rgb(175, 170, 170)
`;
const UserInfoTitle = styled.span`
margin-left: 10px;
`;
const UserUpdateTitle = styled.span`
font-size: 24px;
font-weight: 600;
`;
const UserForm = styled.form`
display: flex;
justify-content: space-between;
margin-top: 20px;
`;
const Left = styled.div``;
const UserItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;

const Label = styled.label`
margin-bottom: 5px;
font-size: 14px;
`;
const Input = styled.input`
border: none;
width: 250px;
height: 30px;
border-bottom: 1px solid gray;
`;
const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Upload = styled.div`
display: flex;
align-items: center;
`;
const UploadImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`;
const UserButton = styled.button`
border-radius: 5px;
border: none;
padding: 5px;
cursor: pointer;
background-color: darkblue;
color: white;
font-weight: 600;
`;

const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to='/newuser'>
        <AddButton>Create</AddButton>
        </Link>
        
      </UserTitleContainer>
      <UserContainer>
        <UserDisplay>
          <UserDisplayTop>
            <DisplayImage src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <UserDisplayTitle>
              <Username>Adeyemo Stephen</Username>
              <UserDesc>Software Engineer</UserDesc>
            </UserDisplayTitle>
          </UserDisplayTop>
          <UserDisplayBottom>
            <UserDTitle>Account Details</UserDTitle>
            <UserInfo>
              <PermIdentity style={{fontSize: '16px'}} />
              <UserInfoTitle>baistevo</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <CalendarViewDay style={{fontSize: '16px'}} />
              <UserInfoTitle>10.12.1999</UserInfoTitle>
            </UserInfo>
            <UserDTitle>Contact Details</UserDTitle>
            <UserInfo>
              <PhoneAndroid style={{fontSize: '16px'}} />
              <UserInfoTitle>+2348162174754</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <MailOutline style={{fontSize: '16px'}} />
              <UserInfoTitle>stephenadeyemo@gmail.com</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <LocationSearching style={{fontSize: '16px'}} />
              <UserInfoTitle>FCT | Abuja</UserInfoTitle>
            </UserInfo>
          </UserDisplayBottom>
        </UserDisplay>
        <UserUpdate>
            <UserUpdateTitle> Edit</UserUpdateTitle>
                <UserForm>
                    <Left>
                        <UserItem>
                            <Label>Username</Label>
                            <Input type="text" placeholder="baistevoo" />
                        </UserItem>
                        <UserItem>
                            <Label>Full Name</Label>
                            <Input type="text" placeholder="Adeyemo Stephen" />
                        </UserItem>
                        <UserItem>
                            <Label>Email</Label>
                            <Input type="text" placeholder="stephenadeyemo@gmail.com" />
                        </UserItem>
                        <UserItem>
                            <Label>Phone</Label>
                            <Input type="text" placeholder="+2348162174754" />
                        </UserItem>
                        <UserItem>
                            <Label>Address</Label>
                            <Input type="text" placeholder="FCT | Abuja" />
                        </UserItem>
                    </Left>
                    
                    <Right>
                        <Upload>
                            <UploadImage src="https://avatars.githubusercontent.com/u/87942124?v=4" />
                            <Label htmlFor="file"><Publish style={{cursor: 'pointer'}} /> </Label>
                            <Input type='file' id='file' style={{display: 'none'}} />
                        </Upload>
                        <UserButton>Update</UserButton>
                    </Right>
                </UserForm>
           
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
