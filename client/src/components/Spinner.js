import React from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <>
      <Loading/>
    </>
  );
};

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Loading = styled.div`
  animation: ${rotate} 1s linear infinite;
  border-top: 4px solid grey;
  border-right: 4px solid grey;
  border-bottom: 4px solid grey;
  border-left: 4px solid #4d91f0;

  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Spinner;
