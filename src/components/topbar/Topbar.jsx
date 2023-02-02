import { NotificationsNone } from "@mui/icons-material";
import { Center, Container, IconBadge, IconContainer, Image, ImageContainer, Left, Logo, Right, Span, Wrapper } from "./topbar.styles";


const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Simee.Treat</Logo>
        </Left>
        <Center>
          <Span href="http://localhost:3001" target="_blank">
            {" "}
            Home
          </Span>
        </Center>
        <Right>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <ImageContainer>
            <Image
              src="https://avatars.githubusercontent.com/u/87942124?v=4"
              alt="admin"
            />
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
