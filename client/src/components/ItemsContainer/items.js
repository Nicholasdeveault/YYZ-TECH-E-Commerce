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
import background from "../../assets/geoBackgroundLight.jpg";

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
            <DivImg>
              <Img src={singleItem.imageSrc} alt="product" />
            </DivImg>
            <Info>
              <Discription>
                {singleItem.name
                  .split(" ")
                  .slice(0, 8)
                  .join()
                  .replace(/,/g, " ")
                  .replace(/-/g, "")}
              </Discription>
              <Div>
                <p>{singleItem.price}</p>
                <p>{singleItem.category}</p>
              </Div>
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
            </Info>
          </ItemWrapper>
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
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 75%;
  margin: 0 auto;
  margin-top: 125px;
  padding: 40px 0px;
`;

const ItemWrapper = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
`;
const Discription = styled.div``;

const Div = styled.div`
  p {
    margin: 5px 0px;
    color: var(--red);
  }
  p:last-of-type {
    color: black;
  }
`;

const Button = styled.button`
  background-color: var(--red);
  color: white;
  text-transform: uppercase;
  width: 140px;
  padding: 5px 20px;
  border: none;
  border-radius: 2px;
`;

const Img = styled.img``;

const DivPrice = styled.div``;

const DivImg = styled.div``;

export default Items;
