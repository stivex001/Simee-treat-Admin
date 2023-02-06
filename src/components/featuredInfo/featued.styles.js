import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
export const FeaturedTitle = styled.span`
font-size: 20px;
`;
export const FeaturedContainer = styled.div`
margin: 10px 0px;
  display: flex;
  align-items: center;
`;
export const FeaturedMoney = styled.span`
font-size: 30px;
  font-weight: bold;
`;
export const FeaturedMoneyRate = styled.div`
display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const Compared = styled.span`
font-size: 15px;
color: gray;
`;