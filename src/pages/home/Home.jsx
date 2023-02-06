import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import { userData } from "../../components/chart/data";

const Container = styled.div`
  flex: 4;
  margin-top: 10px;
`;

const Home = () => {
  return (
    <Container>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </Container>
  );
};

export default Home;
