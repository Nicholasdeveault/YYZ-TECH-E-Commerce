import React from "react";
import ItemComponent from "../ItemComponent";
import { useSelector } from "react-redux";
import { Wrapper, Section, Div, Loader } from "./CategoriesStyles";

import Spinner from "../Spinner";

const ShopAll = () => {
  const allItems = useSelector((state) => state.items.items);
  return (
    <Wrapper>
      <h2>Shop All</h2>
      <Section>
        {allItems &&
          allItems.map((item) => {
            return (
              <Div key={item._id}>
              <ItemComponent item={item} id={item._id} />
              </Div>
            );
          })}
      </Section>
      {!allItems && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrapper>
  );
};

export default ShopAll;
