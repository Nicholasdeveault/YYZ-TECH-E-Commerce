import React from "react";
import styled from "styled-components";
import banner from "../../assets/WATCH.jpeg";
const Banner = () => {
  return <Wrapper></Wrapper>;
};

export default Banner;

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  position: relative;

  h2 {
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 50px;
  }
`;
