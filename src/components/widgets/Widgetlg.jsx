import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  padding: 20px;
`;
const WidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetTable = styled.table`
width: 100%;
border-spacing: 20px;
`;
const Tr = styled.tr``;
const Th = styled.th`
text-align: left;
`;
const Td = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Username = styled.span`
  font-weight: 600;
`;
const Date = styled.td`
font-weight: 300;
`;
const Amount = styled.td`
font-weight: 300;
`;
const Status = styled.td``;
const WidgetButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${prop => prop.color};
  color: ${prop => prop.textColor};
`;


const Widgetlg = () => {
  return (
    <Container>
      <WidgetTitle>Latest Transactions</WidgetTitle>
      <WidgetTable>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <Username>Adeyemo Stephen</Username>
          </Td>
          <Date>2 Jub 2022</Date>
          <Amount>#1500</Amount>
          <Status>
            <WidgetButton color="#e5faf2" textColor="#3bb077">Approved</WidgetButton>
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <Username>Adeyemo Stephen</Username>
          </Td>
          <Date>2 Jub 2022</Date>
          <Amount>#1500</Amount>
          <Status>
            <WidgetButton color="#fff0f1" textColor="#d95087">Declined</WidgetButton>
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <Username>Adeyemo Stephen</Username>
          </Td>
          <Date>2 Jub 2022</Date>
          <Amount>#1500</Amount>
          <Status>
            <WidgetButton color="#ebf1e" textColor="#2a7ade">Pending</WidgetButton>
          </Status>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://avatars.githubusercontent.com/u/87942124?v=4" />
            <Username>Adeyemo Stephen</Username>
          </Td>
          <Date>2 Jub 2022</Date>
          <Amount>#1500</Amount>
          <Status>
            <WidgetButton color="#e5faf2" textColor="#3bb077">Approved</WidgetButton>
          </Status>
        </Tr>
      </WidgetTable>
    </Container>
  );
};

export default Widgetlg;
