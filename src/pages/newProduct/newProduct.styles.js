import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
`;
export const Title = styled.h1``;
export const Form = styled.form`
  margin-top: 10px;
`;
export const FormItems = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  color: gray;
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
export const Option = styled.option``;
export const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;