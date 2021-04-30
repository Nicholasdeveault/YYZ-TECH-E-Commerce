import React from "react";
import styled from "styled-components";
import geo from "../../assets/geoBackgroundLight.jpg";
import welcome from "../../assets/welcome.jpg";
import welcomeShop from "../../assets/welcomeShop.jpg";
import welcomeWholesale from "../../assets/welcomeWholesale.jpg";
const Welcome = () => {
  return (
    <Wrapper>
      <Inner>
        <InnerWrap>
          <Img
            style={{
              backgroundImage: `url(${welcome}`,
            }}
          ></Img>
          <h3>Retail</h3>
        </InnerWrap>
        <InnerWrap>
          <Img
            style={{
              backgroundImage: `url(${welcomeWholesale}`,
            }}
          ></Img>
          <h3>Wholesale</h3>
        </InnerWrap>
        <InnerWrap>
          <Img
            style={{
              backgroundImage: `url(${welcomeShop}`,
            }}
          ></Img>
          <h3>Online</h3>
        </InnerWrap>
      </Inner>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${geo});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  height: 250px;
  overflow: hidden;
  width: 775px;
  justify-content: space-between;
`;

const Img = styled.div`
  width: 250px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 250px 200px;
`;
const InnerWrap = styled.div`
  h3 {
    color: var(--red);
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-top: 10px;
  }
`;
