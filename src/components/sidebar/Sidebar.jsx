import styled from "styled-components";

const Container = styled.div`
flex: 1;
`;
const Wrapper = styled.div``;
const Menu = styled.div``;
const Title = styled.div``;

const Sidebar = () => {
  return (
    <Container>
        <Wrapper>
    <Menu>
    <Title>Dashboard</Title>
    <Menu>
        <li></li>
        <li></li>
        <li></li>
    </Menu>
    </Menu>
    </Wrapper>
    </Container>
  )
}

export default Sidebar