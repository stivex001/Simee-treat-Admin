import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
  padding: 20px;
  margin-right: 20px;
`;
export const WidgetTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
export const WidgetList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const WidgetListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const WidgetUser = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Username = styled.span`
  font-weight: 600;
`;
export const UserTitle = styled.span`
  font-weight: 300;
`;
export const WidgetButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
export const Icon = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;