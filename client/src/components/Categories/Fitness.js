import React from "react";
import ItemComponent from "../ItemComponent";
import { useSelector } from "react-redux";
import { Wrapper, Section, Div, Loader } from "./CategoriesStyles";

import Spinner from "../Spinner";

const Fitness = () => {
  const items = useSelector((state) => state.items.items);
  let fitness = items && items.filter((item) => item.category === "Fitness");
  return (
    <Wrapper>
      <h2>Fitness</h2>
      <Section>
        {fitness &&
          fitness.map((item) => {
            return (
              <Div  key={item._id}>
              <ItemComponent item={item} id={item._id}/>
              </Div>
            );
          })}
      </Section>
      {!fitness && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrapper>
  );
};

export default Fitness;
