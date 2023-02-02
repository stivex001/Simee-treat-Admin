import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: white;
  box-shadow: 3px 0px 20px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: orangered;
  cursor: pointer;
`;
export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
export const Span = styled.a`
  color: orangered;
  text-decoration: none;
`;
export const IconContainer = styled.div`
  postion: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;
export const IconBadge = styled.span`
  position: absolute;
  top: 19px;
  right: 75px;
  background-color: orangered;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 13px;
`;
export const ImageContainer = styled.div``;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;