import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { Loader } from "./Categories/CategoriesStyles";
import Spinner from "./Spinner";
import ItemComponent from "./ItemComponent";
import Banner from "./Banner/Banner";

const HomePage = () => {
  const items = useSelector((state) => state.items);
  const toRender = Object.values(items).map((item) => item);
  const test = toRender[0];

  let next;
  let Sale;
  if (test) {
    next = Object.entries(test).map((item) => item[1]);
    Sale =
      next && next.filter((item) => Number(item.price.slice(1, 6)) <= 20.0);
  }

  return (
    <>
      <Wrapper>
        <Banner />
        <H2>Sales</H2>
        <Section>
          {Sale &&
            Sale.map((item) => (
              <Div key={item._id}>
                <ItemComponent item={item} id={item._id}  />
              </Div>
            ))}
        </Section>
        {!Sale && (
          <Loader>
            <Spinner />
          </Loader>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-bottom: 50px;
`;

const Div = styled.div`
  /* padding: 50px 0 0 60px; */
`;

const H2 = styled.h2`
  text-align: center;
  margin: 55px 0px;
  font-weight: bold;
  font-size: 35px;
  text-decoration: underline;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  width: 800px;
  margin: 0 auto;
  align-items: center;
`;

export default HomePage;
