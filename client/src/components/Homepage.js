import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { Loader } from "./Categories/CategoriesStyles";
import Spinner from "./Spinner";
import ItemComponent from "./ItemComponent";
import Banner from "./Banner/Banner";
import Welcome from "./Welcome";
import geoBackground from "../assets/geoBackground.jpg";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const items = useSelector((state) => state.items);
  const toRender = Object.values(items).map((item) => item);
  const test = toRender[0];

  let next;
  let filteredSale;
  let saleArr;
  if (test) {
    next = Object.entries(test).map((item) => item[1]);
    filteredSale =
      next && next.filter((item) => Number(item.price.slice(1, 6)) <= 20.0);
    saleArr = filteredSale.slice(0, 10);
  }

  let filtered;
  let newArr;
  let newAvailable;
  if (test) {
    next = Object.entries(test).map((item) => item[1]);
    newAvailable = next.filter((item) => {
      return item.numInStock > 5;
    });
    filtered = newAvailable.filter(
      (item) => Number(item.price.slice(1, 6)) > 40.0
    );
    newArr = filtered.slice(0, 10);
  }

  return (
    <>
      <Wrapper>
        <Banner />
        <Welcome />
        <New>
          <h2>New</h2>
          <Section>
            {newArr &&
              newArr.map((item) => (
                <Div key={item._id}>
                  <ItemComponent item={item} id={item._id} />
                </Div>
              ))}
          </Section>
        </New>
        <Sale>
          <h2>Sale</h2>
          <Section>
            {saleArr &&
              saleArr.map((item) => (
                <Div key={item._id}>
                  <ItemComponent item={item} id={item._id} />
                </Div>
              ))}
          </Section>{" "}
        </Sale>

        {!saleArr && !newArr && (
          <Loader>
            <Spinner />
          </Loader>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  padding-bottom: 50px;
  h2 {
    font-family: "Archivo Black";
    text-transform: uppercase;
    font-size: 2.5em;
    text-align: center;
  }
`;

const Div = styled.div`
  /* padding: 50px 0 0 60px; */
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 155px);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 875px;
  margin: 0 auto;
  align-items: center;
`;

const New = styled.div`
  padding: 20px 0px;
  background-image: url(${geoBackground});
  background-size: cover;
  background-position: center;
  h2 {
    color: white;
    margin: 20px 0px;
  }
  p,
  h4 {
    color: white;
  }
  button {
    background-color: var(--red);
  }
`;

const Sale = styled.div`
  padding: 20px 0px;
  h2 {
    margin: 20px 0px;
  }
`;

const Divider = styled.div``;

export default HomePage;
