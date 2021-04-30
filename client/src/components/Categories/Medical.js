import React from "react";
import ItemComponent from "../ItemComponent";
import { useSelector } from "react-redux";
import { Wrapper, Section, Div, Loader } from "./CategoriesStyles";

import Spinner from "../Spinner";

const Medical = () => {
  const items = useSelector((state) => state.items.items);
  let medical = items && items.filter((item) => item.category === "Medical");
  return (
    <Wrapper>
      <h2>Medical</h2>
      <Section>
        {medical &&
          medical.map((item) => {
            return (
              <Div key={item._id}>
              <ItemComponent item={item} id={item._id} />
              </Div>
            );
          })}
      </Section>
      {!medical && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrapper>
  );
};

export default Medical;
