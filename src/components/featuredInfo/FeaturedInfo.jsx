import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import { Compared, Container, FeaturedContainer, FeaturedMoney, FeaturedMoneyRate, FeaturedTitle, Wrapper } from "./featued.styles";


const FeaturedInfo = () => {
  return (
    <Container>
      <Wrapper>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedContainer>
          <FeaturedMoney>#250,000</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4
            <ArrowDownward style={{color: 'red', fontSize: '14px', marginLeft: '15px'}} />
          </FeaturedMoneyRate>
        </FeaturedContainer>
        <Compared>Compared to last month</Compared>
      </Wrapper>
      <Wrapper>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedContainer>
          <FeaturedMoney>#250,000</FeaturedMoney>
          <FeaturedMoneyRate>
            +10.4
            <ArrowUpward style={{color: 'green', fontSize: '14px', marginLeft: '15px'}}/>
          </FeaturedMoneyRate>
        </FeaturedContainer>
        <Compared>Compared to last month</Compared>
      </Wrapper>
      <Wrapper>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedContainer>
          <FeaturedMoney>#250,000</FeaturedMoney>
          <FeaturedMoneyRate>
            +13.4
            <ArrowUpward style={{color: 'green', fontSize: '14px', marginLeft: '15px'}}/>
          </FeaturedMoneyRate>
        </FeaturedContainer>
        <Compared>Compared to last month</Compared>
      </Wrapper>
    </Container>
  );
};

export default FeaturedInfo;
