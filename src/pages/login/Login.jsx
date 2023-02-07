import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick =(e) => {
    e.preventDefault()
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
