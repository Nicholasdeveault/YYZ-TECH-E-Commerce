import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 50px;
  h2 {
    text-align: center;
    margin: 55px 0px;
    font-weight: bold;
    font-size: 35px;
    text-decoration: underline;
  }
  img {
  }
`;

export const Section = styled.section`
  //FEEL FREE TO CHANGE ALL OF THIS, I did it as grid but do whatever
  //you think works best!!!
  display: grid;
  grid-template-columns: repeat(5, 155px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 875px;
  margin: 0 auto;
  align-items: center;
`;

export const Div = styled.div`
  /* padding: 50px 0 0 60px; */
`;

export const Loader = styled.div`
  width: 30px;
  margin: 0 auto;
`;
