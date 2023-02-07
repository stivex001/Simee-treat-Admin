import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;
const Title = styled.h1``;
const Form = styled.form`
  margin-top: 10px;
`;
const FormItems = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  color: gray;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const Option = styled.option``;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const NewProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <FormItems>
          <Label>Image</Label>
          <Input type="file" id="file" />
        </FormItems>
        <FormItems>
          <Label>Name</Label>
          <Input type="text" placeholder="Cake" />
        </FormItems>
        <FormItems>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </FormItems>
        <FormItems>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </FormItems>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}

export default NewProduct