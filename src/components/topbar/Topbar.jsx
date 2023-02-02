import { NotificationsNone } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`

`;
const Wrapper = styled.div``;
const Logo = styled.h1``;
const Left = styled.div``;
const Right = styled.div``;
const Center = styled.div``;
const Span = styled.p``;
const IconContainer = styled.div``;
const IconBadge = styled.span``;
const ImageContainer = styled.div``;
const Image = styled.img``;

const Topbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Simee.Treat</Logo>
            </Left>
            <Center>
                <Span>Main</Span>
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
  )
}

export default Topbar