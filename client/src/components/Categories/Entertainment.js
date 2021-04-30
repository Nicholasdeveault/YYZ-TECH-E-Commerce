import React from "react";
import ItemComponent from "../ItemComponent";
import { useSelector } from "react-redux";
import { Wrapper, Section, Div, Loader } from "./CategoriesStyles";
import Spinner from "../Spinner";

const Entertainment = () => {
  const items = useSelector((state) => state.items.items);
  let entertainment =
    items && items.filter((item) => item.category === "Entertainment");
  return (
    <Wrapper>
      <h2>Entertainment</h2>
      <Section>
        {entertainment &&
          entertainment.map((item) => {
            return (
              <Div key={item._id}>
              <ItemComponent item={item} id = {item._id} />
              </Div>
            );
          })}
      </Section>
      {!entertainment && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrapper>
  );
};

export default Entertainment;
