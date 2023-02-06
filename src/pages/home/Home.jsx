import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import { userData } from "../../components/chart/data";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Widgetlg from "../../components/widgets/Widgetlg";
import Widgetsm from "../../components/widgets/Widgetsm";

const Container = styled.div`
  flex: 4;
  margin-top: 10px;
`;
const Widget = styled.div`
display: flex;
justify-content: space-between;
`


const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widget>
        <Widgetsm />
        <Widgetlg />
      </Widget>
    </Container>
  );
};

export default Home;
