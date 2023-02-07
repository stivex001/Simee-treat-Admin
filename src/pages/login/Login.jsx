import styled from "styled-components";

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Login = () => {
  return (
    <Container>
        <Input type='text' placeholder="username" />
        <Input type='password' placeholder="password" />
        <Button>Login</Button>
    </Container>
  )
}

export default Login