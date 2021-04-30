import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItemInCart, minusOnefromCart, removeItem } from "../../actions";
import Spinner from "../Spinner";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

const CartItems = () => {
  const cartItem = useSelector((state) => state.items.cart);
  const dispatch = useDispatch();
  let carts = Object.values(cartItem);

  return (
    <>
      <Wrapper>
        {cartItem ? (
          carts.map((cart) => {
            return (
              <Li key={cart._id}>
                <Div>
                  <Button
                    onClick={() => {
                      dispatch(removeItem(cart));
                    }}
                  >
                    <TiDeleteOutline
                      style={{ width: "20px", height: "20px", color: "gray" }}
                    />
                  </Button>
                  <NavLink to={`/item/${cart._id}`}>
                    <ItemName>
                      <p>
                        {cart.name
                          .split(" ")
                          .slice(0, 2)
                          .join()
                          .replace(/,/g, " ")
                          .replace(/-/g, "")}
                      </p>
                    </ItemName>
                    <Img src={cart.imageSrc} alt="cart item" />
                  </NavLink>
                  <Container>
                    <Btn
                      disabled={cart.quantity === 1 && true}
                      onClick={() => {
                        dispatch(minusOnefromCart(cart));
                      }}
                    >
                      -
                    </Btn>
                    <div>{cart.quantity}</div>
                    <Btn
                      disabled={cart.numInStock === 0 && true}
                      onClick={() => {
                        dispatch(addItemInCart(cart));
                      }}
                    >
                      +
                    </Btn>
                  </Container>
                  <div>{cart.price}</div>
                </Div>
              </Li>
            );
          })
        ) : (
          <div>
            <Spinner />
            Loading...
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Div = styled.div`
  margin: 10px;
`;

const Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  line-height: 40px;
  color: black;
  width: 900px;
`;

const Img = styled.img`
  border-bottom: 2px solid darkgray;
  padding: 20px 0;
  height: 150px;
  width: 180px;
`;

const Li = styled.li`
  list-style-type: none;
  margin: 20px 10px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ItemName = styled.div`
  color: white;
  background-color: black;
  padding: 3px 5px;
  p {
    margin: 0px 5px;
  }
`;
export default CartItems;
