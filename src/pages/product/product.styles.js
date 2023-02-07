import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const Top = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;

export const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBottom = styled.div`
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const Key = styled.span`
  font-weight: 600;
`;

export const Value = styled.span``;

export const Bottom = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 19px 5px 50px -3px rgba(235, 180, 180, 0.55);
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LeftLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;
export const LeftInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;
export const Select = styled.select`
  margin-bottom: 10px;
`;
export const Option = styled.option``;
export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-it: cover;
  margin-right: 20px;
`;
export const FileLabel = styled.label``;
export const FileInput = styled.input``;
export const UpdateButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
