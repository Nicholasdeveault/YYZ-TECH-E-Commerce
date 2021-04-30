import React from "react";
import styled from "styled-components";
import banner from "../../assets/buildingsHero02.jpg";
import logo from "../../assets/geo01.png";
const Banner = () => {
  return (
    <Wrapper>
      <Logo>
        <h2>YYZ</h2>
        <h2>TECH</h2>
      </Logo>
      <Details>
        <p>Function</p>
        <p>Form</p>
        <p>Utility</p>
      </Details>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 90vh;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;

  h2:first-of-type {
    margin-top: 40px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 6em;
    color: white;
    font-family: "Archivo Black", sans-serif;
  }

  h2:last-of-type {
    font-size: 4.5em;
  }

  h3 {
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
  }
`;

const Details = styled.div`
  margin-top: 10px;
  display: flex;
  color: white;
  p {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding-right: 10px;
  }
  p:last-of-type {
    padding-right: 0;
  }
`;
