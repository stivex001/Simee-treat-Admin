import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Main from "../main/Main";

const Container = styled.div`
display: flex;
margin-top: 10px;
`;

const Home = () => {
  return (
    <>
      <Topbar />

      <Container>
        <Sidebar />
        <Main />
      </Container>
    </>
  );
};

export default Home;
