import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../components/chart/data";
import {
  Bottom,
  Button,
  Container,
  FileInput,
  FileLabel,
  Form,
  FormLeft,
  FormRight,
  Image,
  InfoBottom,
  InfoItem,
  InfoTop,
  Key,
  Left,
  LeftInput,
  LeftLabel,
  Name,
  Option,
  Right,
  Select,
  Title,
  TitleContainer,
  Top,
  UpdateButton,
  Upload,
  UploadImg,
  Value,
} from "./product.styles";

const Product = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to="/newproduct">
          <Button>Create</Button>
        </Link>
      </TitleContainer>

      <Top>
        <Left>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </Left>
        <Right>
          <InfoTop>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/220px-Pound_layer_cake.jpg" />
            <Name>Cakes</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <Key>id:</Key>
              <Value>123</Value>
            </InfoItem>
            <InfoItem>
              <Key>sales:</Key>
              <Value>123</Value>
            </InfoItem>
            <InfoItem>
              <Key>active:</Key>
              <Value>yes</Value>
            </InfoItem>
            <InfoItem>
              <Key>in stock:</Key>
              <Value>no</Value>
            </InfoItem>
          </InfoBottom>
        </Right>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <LeftLabel>Product Name</LeftLabel>
            <LeftInput placeholder="cake" />
            <LeftLabel>In Stock</LeftLabel>
            <Select name="inStock" id="idStock">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
            <LeftLabel>Active</LeftLabel>
            <Select name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/220px-Pound_layer_cake.jpg" />
              <FileLabel for="file">
                <Publish style={{ cursor: "pointer" }} />
              </FileLabel>
              <FileInput type="file" id="file" style={{ display: "none" }} />
            </Upload>
            <UpdateButton>Update</UpdateButton>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

export default Product;
