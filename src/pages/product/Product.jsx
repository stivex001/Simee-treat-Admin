import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation()
  const productId = location.pathname.split('/')[2];

  const product = useSelector(state => state.product.products.find(product => product._id === productId))

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
            <Image src={product.img} />
            <Name>{product.title}</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <Key>id:</Key>
              <Value>{product._id}</Value>
            </InfoItem>
            <InfoItem>
              <Key>sales:</Key>
              <Value>123</Value>
            </InfoItem>
            <InfoItem>
              <Key>in stock:</Key>
              <Value>{product.inStock}</Value>
            </InfoItem>
          </InfoBottom>
        </Right>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <LeftLabel>Product Name</LeftLabel>
            <LeftInput placeholder={product.title} />
            <LeftLabel>Product Description</LeftLabel>
            <LeftInput placeholder={product.desc} />
            <LeftLabel>Price</LeftLabel>
            <LeftInput placeholder={product.price} />
            <LeftLabel>In Stock</LeftLabel>
            <Select name="inStock" id="idStock">
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src={product.img} alt={product.title}/>
              <FileLabel htmlFor="file">
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
