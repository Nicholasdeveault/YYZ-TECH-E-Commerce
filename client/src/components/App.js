import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  requestItemData,
  receiveItemData,
  receiveItemDataError,
} from "../actions";
import Items from "./ItemsContainer/items";
import HomePage from "./Homepage";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";
import Cart from "./cart/Cart";
import LifeStyle from "./Categories/LifeStyle.js";
import Fitness from "./Categories/Fitness.js";
import Medical from "./Categories/Medical.js";
import Entertainment from "./Categories/Entertainment.js";
import ShopAll from "./Categories/ShopAll";
import Checkout from "./checkout/Checkout";
import Footer from "./Footer/Footer";
import Complete from "./checkout/Complete";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestItemData());
    fetch("/item")
      .then((res) => res.json())
      .then((data) => dispatch(receiveItemData(data)))
      .catch((err) => dispatch(receiveItemDataError()));
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Homepage" />
          </Route>
          <Route exact path="/Homepage">
            <HomePage />
          </Route>
          <Route exact path="/item/:id">
            <Items />
          </Route>
          <Route exact path="/lifestyle">
            <LifeStyle />
          </Route>
          <Route exact path="/fitness">
            <Fitness />
          </Route>
          <Route exact path="/medical">
            <Medical />
          </Route>
          <Route exact path="/entertainment">
            <Entertainment />
          </Route>
          <Route exact path="/shopall">
            <ShopAll />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/complete">
            <Complete />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
