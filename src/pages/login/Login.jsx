import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../redux/apiCalls";

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Input = styled.input`
padding: 10px;
margin-bottom: 20px;
`;
const Button = styled.button`
padding: 10px;
width: 100px;
cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  const handleClick =(e) => {
    e.preventDefault()
    login(dispatch, {username, password})
    navigate('/home')
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick}>Login</Button>
    </Container>
  );
};

export default Login;
