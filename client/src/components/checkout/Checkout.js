import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { clearCart } from "../../actions";
import Input from "./input";

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItem = useSelector((state) => state.items.cart);
  const itemArray = Object.values(cartItem);
  const [id, setid] = useState(null);
  const [quantity, setquantity] = useState(null);
  const [uncomplete, setUncomplete] = useState("idle");
  const [value, setValue] = useState({
    givenName: null,
    surname: null,
    email: null,
    address: null,
    city: null,
    province: null,
    postcode: null,
    country: null,
  });

  const isFilled = (item) => item !== null;
  const arr = Object.values(value);

  let idArray = [];
  let numArray = [];
  useEffect(() => {
    itemArray.forEach((item) => {
      idArray.push(item._id);
      numArray.push(item.quantity);
    });
    setid(idArray);
    setquantity(numArray);
  }, [cartItem]);
  const Submit = (e) => {
    e.preventDefault();

    fetch("/purchase", {
      method: "POST",
      body: JSON.stringify({ id: id, num: quantity }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { status } = json;
        if (status === 200) {
          dispatch(clearCart());
          history.push("/complete");
        } else {
          setUncomplete("error");
        }
      });
  };

  return (
    <Wrapper>
      <FormContent>
        <H1>Order Form</H1>
        <br />
        <br />
        <H2>Provide your information</H2>
        <FormGroup>
          <Input
            name="givenName"
            type="text"
            placeholder="First name"
            setValue={setValue}
            value={value}
          />
          <Input
            name="surname"
            type="text"
            placeholder="Last name"
            setValue={setValue}
            value={value}
          />
        </FormGroup>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          setValue={setValue}
          value={value}
        />
        <br />
        <br />
        <H2>Shipping Address</H2>
        <Input
          name="address"
          type="address"
          placeholder="Address"
          setValue={setValue}
          value={value}
        />
        <FormGroup>
          <Input
            name="city"
            type="text"
            placeholder="City"
            setValue={setValue}
            value={value}
          />
          <Input
            name="province"
            type="text"
            placeholder="Province"
            setValue={setValue}
            value={value}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="postcode"
            type="text"
            placeholder="Postal Code"
            setValue={setValue}
            value={value}
          />
          <Input
            name="country"
            type="text"
            placeholder="Country"
            setValue={setValue}
            value={value}
          />
        </FormGroup>
      </FormContent>
      <br />
      <br />
      <Footer>
        <Div>
          <Button type="reset">Clear</Button>
          {arr.every(isFilled) ? (
            <Button onClick={Submit}>Submit</Button>
          ) : (
            <DisabledBtn onClick={Submit} disabled={true}>
              Submit
            </DisabledBtn>
          )}
        </Div>
        {uncomplete === "error" && <div>Please complete your form!</div>}
      </Footer>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const FormContent = styled.div`
  margin: 0 16px 0;
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    flex: 1 0 auto;
    width: 48%;

    &:first-child {
      margin-right: 6px;
    }
  }
`;

const Button = styled.button`
  margin: 10px;
  height: 40px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: black;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4c84a5;
  }
`;

const DisabledBtn = styled(Button)`
  color: gray;
  &:hover {
    background-color: black;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const H2 = styled.h2``;
