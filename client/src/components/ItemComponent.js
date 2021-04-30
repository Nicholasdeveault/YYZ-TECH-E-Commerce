import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addItemInCart } from "../actions";

const ItemComponent = ({ item, id }) => {
  const cartItem = useSelector((state) => state.items.cart);
  const dispatch = useDispatch();
  const name = item.name
    .split(" ")
    .slice(0, 3)
    .join()
    .replace(/,/g, " ")
    .replace(/-/g, "");
  return (
    <Wrapper>
      <StyledLink to={`/item/${item._id}`}>
        <Img
          style={{
            backgroundImage: `url(${item.imageSrc}`,
          }}
        ></Img>

        <Details>
          <h4>{name}</h4>
          <p>{item.price}</p>
        </Details>
      </StyledLink>
      <P>
        <span>{item.category}</span>
      </P>
      {cartItem[id] ? (
        <Button
          disabled={cartItem[id].numInStock === 0 && true}
          onClick={() => {
            dispatch(addItemInCart(item));
          }}
        >
          Add to cart
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(addItemInCart(item));
          }}
          disabled={item.numInStock === 0 && true}
        >
          {item.numInStock === 0 ? "Out of stock" : "Add to cart"}
        </Button>
      )}
    </Wrapper>
  );
};

export default ItemComponent;

const Wrapper = styled.div``;

const Details = styled.div`
  font-size: 0.9em;
  p {
    margin: 5px 0px;
  }
`;

const Img = styled.div`
  border-radius: 2px;
  margin-bottom: 20px;
  height: 150px;
  width: 150px;
  background-size: cover;
  background-position: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* font-weight: bold; */
`;

const Button = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 100%;
  border: none;
  border-radius: 2px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--red);
  }
`;

const P = styled.p`
  color: var(--red);
  font-size: 0.7em;
`;
