import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 100px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
export const Wrapper = styled.div`
color: #555;
padding: 20px;
`;
export const Menu = styled.div`
margin-bottom: 10px;
`;
export const Title = styled.h3`
font-size: 13px;
  color: rgb(187, 186, 186);
  margin-bottom: 10px;
`;
export const List = styled.ul`
list-style: none;
padding: 5px;

`;
export const ListItem = styled.li`
display: flex;
align-items: center;
padding: 5px;
cursor: pointer;
border-radius: 10px;
font-size: 15px;
&:active {
  background-color: rgb(240, 240, 255);
}

&:hover {
  background-color: rgb(240, 240, 255);
}
`;
