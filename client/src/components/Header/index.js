import React from "react";
import Nav from "../Nav";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: black;
`;
