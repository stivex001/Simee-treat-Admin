import styled from "styled-components";
import { LineChart, Line, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Container = styled.div`
margin: 20px;
padding: 20px;
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
const ChartTitle = styled.h3`
margin-bottom: 20px;
`;

const Chart = ({data, dataKey, title, grid}) => {
   
  return (
    <Container>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey='name' stroke="#5550bd" />
                <Line type='monotone' dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </Container>
  )
}

export default Chart