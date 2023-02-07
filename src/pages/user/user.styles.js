import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
export const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserTitle = styled.h1``;
export const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const UserDisplay = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  padding: 20px;
`;
export const UserUpdate = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  margin-left: 50px;
  padding: 20px;
`;
export const UserDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;
export const DisplayImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UserDisplayTitle = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const Username = styled.span`
  font-weight: 600;
`;
export const UserDesc = styled.span`
  font-weight: 300;
`;
export const UserDisplayBottom = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
`;
export const UserInfo = styled.span`
display: flex;
align-items: center;
margin: 20px 0px;
color: #444;
`;
export const UserDTitle = styled.span`
font-size: 14px;
font-weight: 600;
color: rgb(175, 170, 170)
`;
export const UserInfoTitle = styled.span`
margin-left: 10px;
`;
export const UserUpdateTitle = styled.span`
font-size: 24px;
font-weight: 600;
`;
export const UserForm = styled.form`
display: flex;
justify-content: space-between;
margin-top: 20px;
`;
export const Left = styled.div``;
export const UserItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`;

export const Label = styled.label`
margin-bottom: 5px;
font-size: 14px;
`;
export const Input = styled.input`
border: none;
width: 250px;
height: 30px;
border-bottom: 1px solid gray;
`;
export const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const Upload = styled.div`
display: flex;
align-items: center;
`;
export const UploadImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`;
export const UserButton = styled.button`
border-radius: 5px;
border: none;
padding: 5px;
cursor: pointer;
background-color: darkblue;
color: white;
font-weight: 600;
`;