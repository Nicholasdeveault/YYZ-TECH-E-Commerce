import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  requestSingleItemData,
  receiveSingleItemData,
  receiveSingleItemDataError,
  addItemInCart,
} from "../../actions";
import styled from "styled-components";

const Items = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleItem = useSelector((state) => state.items.item);
  const cartItem = useSelector((state) => state.items.cart);
  let cart = Object.values(cartItem);

  useEffect(() => {
    dispatch(requestSingleItemData());
    fetch(`/item/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(receiveSingleItemData(data.data));
      })
      .catch((err) => dispatch(receiveSingleItemDataError()));
  }, [id, dispatch]);

  return (
    <Wrapper>
      {singleItem && (
        <>
          <ItemWrapper>
            <Discription>
              {singleItem.name
                .split(" ")
                .slice(0, 8)
                .join()
                .replace(/,/g, " ")
                .replace(/-/g, "")}
            </Discription>
            <Div>
              <DivPrice>{singleItem.price}</DivPrice>

              <div>- {singleItem.category}</div>
            </Div>
          </ItemWrapper>
          <DivImg>
            <Img src={singleItem.imageSrc} alt="product" />
            {cart.length > 0 ? (
              <Button
                disabled={cartItem[singleItem._id].numInStock === 0 && true}
                onClick={() => {
                  dispatch(addItemInCart(singleItem));
                }}
              >
                Add to cart
              </Button>
            ) : (
              <Button
                disabled={singleItem.numInStock === 0 && true}
                onClick={() => {
                  dispatch(addItemInCart(singleItem));
                }}
              >
                Add to cart
              </Button>
            )}
          </DivImg>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

const ItemWrapper = styled.div``;

const Discription = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  bottom: -210px;
  left: 150px;
  text-decoration: underline;
  width: 700px;
  text-align: left;
`;

const Div = styled.div`
  position: relative;
  bottom: -380px;
  left: 150px;
  font-weight: bold;
  font-size: 25px;
`;

const Button = styled.button`
  margin-top: 40px;
  margin-bottom: 40px;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: black;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  right: 340px;
  top: 40px;
  color: white;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #4c84a5;
  }
`;

const Img = styled.img`
  margin-bottom: 40px;
  border-bottom: 2px solid darkgray;
  padding: 20px 0;
  height: 300px;
  /* width: 310px; */
  position: relative;
  right: 450px;
  top: 70px;
`;

const DivPrice = styled.div`
  padding-bottom: 30px;
`;

const DivImg = styled.div`
  margin-right: 150px;
  display: flex;
  flex-direction: column;
`;

export default Items;
