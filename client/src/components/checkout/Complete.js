import React from "react";
import styled from "styled-components";


const Complete = () => {

  return (
    <>
      <Wrapper>Order completed! Thank you for your order!</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 300px;
font-size: 20px;
`;

export default Complete;
