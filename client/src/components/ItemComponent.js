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
    .slice(0, 4)
    .join()
    .replace(/,/g, " ")
    .replace(/-/g, "");
  return (
    <Wrapper>
      <StyledLink to={`/item/${item._id}`}>
        <Img src={item.imageSrc} alt={item.name} />

        <Details>
          <h4>{name}</h4>
          <p>{item.price}</p>
        </Details>
      </StyledLink>
      <P>
        <span>- {item.category}</span>
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

const Details = styled.div``;

const Img = styled.img`
  margin-bottom: 20px;
  border-bottom: 2px solid darkgray;
  padding: 20px 0;
  height: 150px;
  width: 180px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* font-weight: bold; */
`;

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 40px;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: black;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #4c84a5;
  }
`;

const P = styled.p`
  margin-top: 15px;
`;
