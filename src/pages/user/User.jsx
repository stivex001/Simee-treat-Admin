import {
  CalendarViewDay,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  AddButton,
  Container,
  DisplayImage,
  Input,
  Label,
  Left,
  Right,
  Upload,
  UploadImage,
  UserButton,
  UserContainer,
  UserDesc,
  UserDisplay,
  UserDisplayBottom,
  UserDisplayTitle,
  UserDisplayTop,
  UserDTitle,
  UserForm,
  UserInfo,
  UserInfoTitle,
  UserItem,
  Username,
  UserTitle,
  UserTitleContainer,
  UserUpdate,
  UserUpdateTitle,
} from "./user.styles";

const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newuser">
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
              <PermIdentity style={{ fontSize: "16px" }} />
              <UserInfoTitle>baistevo</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <CalendarViewDay style={{ fontSize: "16px" }} />
              <UserInfoTitle>10.12.1999</UserInfoTitle>
            </UserInfo>
            <UserDTitle>Contact Details</UserDTitle>
            <UserInfo>
              <PhoneAndroid style={{ fontSize: "16px" }} />
              <UserInfoTitle>+2348162174754</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <MailOutline style={{ fontSize: "16px" }} />
              <UserInfoTitle>stephenadeyemo@gmail.com</UserInfoTitle>
            </UserInfo>
            <UserInfo>
              <LocationSearching style={{ fontSize: "16px" }} />
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
                <Label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />{" "}
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
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
