import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import CartItems from "./CartItems";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.items.cart);
  let carts = Object.values(cartItem);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let sum = 0;
    carts.forEach((item) => {
      sum = sum + Number(item.price.slice(1, 6)) * item.quantity;
    });
    setTotal(sum);
  }, [carts]);

  // format total like $00.00
  const fixPrice = (n) => {
    let res = n.toFixed(2);
    return res;
  };

  return (
    <>
      <H2>Shopping Cart</H2>
      {total === 0 && <P>Your cart is empty</P>}
      <Main>
        {carts ? (
          <>
            <Wrapper>
              <Div>
                <CartItems />
              </Div>
            </Wrapper>
          </>
        ) : (
          <div>
            <Spinner />
            Loading...
          </div>
        )}
        <div>
          <P>Subtotal: ${fixPrice(total)}</P>
          <NavLink exact to="/checkout">
            <Checkout disabled={carts.length === 0 && true}>
              Proceed to checkout
            </Checkout>
          </NavLink>
        </div>
      </Main>
    </>
  );
};

const P = styled.p`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 55px 0px;
  font-weight: bold;
  font-size: 35px;
  text-decoration: underline;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  color: black;
`;

const Checkout = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  right: 30px;
  cursor: pointer;
`;

const Div = styled.div`
  grid-template-columns: repeat(3, 250px);
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 75px;
`;
export default Cart;
