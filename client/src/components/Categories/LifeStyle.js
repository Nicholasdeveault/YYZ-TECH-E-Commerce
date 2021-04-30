import React from "react";
import ItemComponent from "../ItemComponent";
import { useSelector } from "react-redux";
import { Wrapper, Section, Div, Loader } from "./CategoriesStyles";

import Spinner from "../Spinner";

const LifeStyle = () => {
  const items = useSelector((state) => state.items.items);
  let lifestyle =
    items && items.filter((item) => item.category === "Lifestyle");
  return (
    <Wrapper>
      <h2>Lifestyle</h2>
      <Section>
        {lifestyle &&
          lifestyle.map((item) => {
            return (
              <Div key={item._id}>
              <ItemComponent item={item} id = {item._id} />
              </Div>
            );
          })}
      </Section>
      {!lifestyle && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrapper>
  );
};

export default LifeStyle;
