import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { BiListCheck } from "react-icons/bi";

const Nav = () => {
  //CHANGE THIS VARIBALE WHEN WE DECIDE ON A COLOR

  //Change HOVER color if globalstyles.js
  // current at end of sheet a:hover{color:lightgrey}

  const cartItem = useSelector((state) => state.items.cart);

  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    let carts = Object.values(cartItem);
    let sum = 0;
    carts.forEach((item) => {
      sum = sum + 1 * item.quantity;
    });
    setTotalItem(sum);
  }, [cartItem]);
  return (
    <NavWrapper>
      <ul>
        <NavLink
          activeStyle={{
            textDecoration: "underline",
            color: "white",
          }}
          exact
          to="/Homepage"
        >
          <li>
            <h1>YYZ TECH</h1>
          </li>
        </NavLink>

        <Catagories>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              color: "white",
            }}
            exact
            to="/lifestyle"
          >
            <li>Lifestyle</li>
          </NavLink>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              color: "white",
            }}
            exact
            to="/fitness"
          >
            <li>Fitness</li>
          </NavLink>

          <NavLink
            activeStyle={{
              textDecoration: "underline",
              color: "white",
            }}
            exact
            to="/medical"
          >
            <li>Medical</li>
          </NavLink>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              color: "white",
            }}
            exact
            to="/entertainment"
          >
            <li>Entertainment</li>
          </NavLink>
          <NavLink
            activeStyle={{
              textDecoration: "underline",
              color: "white",
            }}
            exact
            to="/shopall"
          >
            <li>Shop All</li>
          </NavLink>
        </Catagories>

        <NavLink
          activeStyle={{
            textDecoration: "underline",
            color: "white",
          }}
          exact
          to="/cart"
        >
          <Cart>
            <DivNum>{totalItem}</DivNum>
            <li>
              <FaShoppingCart />
            </li>
          </Cart>
        </NavLink>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  margin: 0 auto;
  width: 95vw;

  h1 {
    font-size: 1.9em;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  }
  //removes list bullet points
  li {
    list-style-type: none;
    color: white;
    font-size: 20px;
    text-transform: uppercase;
  }

  li:hover {
    color: darkgray;
    text-decoration: underline;
  }

  //THIS IS THE CART ICON
  svg {
    transition: 0.2s ease-in-out;
  }

  svg:hover {
    color: darkgray;
    transform: scale(1.05);
  }
  a:hover {
    color: darkgray;
    transform: scale(1.05);
  }

  li:first-of-type {
    display: flex;
  }

  svg:nth-child(1) {
    margin-top: -12px;
  }
`;

const Catagories = styled.div`
  display: flex;
  margin-left: -150px;

  li {
    margin: 0px 10px;
    font-size: 0.9em;
  }
`;

const DivNum = styled.div`
  font-weight: bold;
  color: white;
  margin-top: -5px;
  padding-right: 10px;
`;

const Cart = styled.div`
  display: flex;
  margin-top: 10px;
`;
