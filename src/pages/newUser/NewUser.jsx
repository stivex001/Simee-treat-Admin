import {
  Button,
  Container,
  Form,
  FormItems,
  Gender,
  GenderInput,
  GenderLabel,
  Input,
  Label,
  Option,
  Select,
  Title,
} from "./newuser.styles";

const Newuser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <FormItems>
          <Label>Username</Label>
          <Input type="text" placeholder="baistevoo" />
        </FormItems>
        <FormItems>
          <Label>Full Name</Label>
          <Input type="text" placeholder="Adeyemo Stephen" />
        </FormItems>
        <FormItems>
          <Label>Email</Label>
          <Input type="email" placeholder="stephenadeyemo@gmail.com" />
        </FormItems>
        <FormItems>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </FormItems>
        <FormItems>
          <Label>Phone</Label>
          <Input type="text" placeholder="08162174754" />
        </FormItems>
        <FormItems>
          <Label>Address</Label>
          <Input type="text" placeholder="FCT | Nigeria" />
        </FormItems>
        <FormItems>
          <Label>Gender</Label>
          <Gender>
            <GenderInput type="radio" name="gender" id="male" value="male" />
            <GenderLabel for="male">Male</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <GenderLabel for="female">Female</GenderLabel>
            <GenderInput type="radio" name="gender" id="other" value="other" />
            <GenderLabel for="other">Other</GenderLabel>
          </Gender>
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
  );
};

export default Newuser;
