import React from "react";
import styled from "styled-components";

import { useState } from "react";
import logo from "../../assets/logoTransparent.png";
import geoBackground from "../../assets/geoBackground.jpg";
const Footer = () => {
  const [userEmail, setUserEmail] = useState({ email: "" });
  const [message, setMessage] = useState(
    "*email must contain valid characters"
  );

  const handleChange = (value, email) => {
    setUserEmail({ ...userEmail, [email]: value });
  };

  let errMsg = "please enter a valid email";
  let successMsg = "email submitted!";
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid =
      userEmail.email.includes("@") && userEmail.email.includes(".");
    let input = document.getElementById("email");
    if (!isValid) {
      input.style.border = "1px solid red";
      setMessage(errMsg);
    } else {
      input.style.border = "1px solid grey";
      setMessage(successMsg);
    }
  };
  return (
    <FooterDiv>
      <InnerDiv>
        <img src={logo} alt="YYZ Tech Logo" />
      </InnerDiv>
      <InnerDiv>
        <h4>Join our mailing list!</h4>
        <form action="submit">
          <label htmlFor="email" aria-label="email-input">
            <input
              id="email"
              type="text"
              value={userEmail.email}
              required
              onChange={(ev) => handleChange(ev.target.value, "email")}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <Message>
          <p>{message}</p>
        </Message>
      </InnerDiv>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  height: 210px;
  color: white;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0px;
  background-image: url(${geoBackground});
  background-size: cover;
  background-position: center;
  p,
  input {
    margin-right: 10px;
  }
  input {
    border: 1px solid grey;
    border-radius: 3px;
    height: 15px;
  }
  form {
    display: flex;
    align-items: baseline;
  }
  h4 {
    margin-top: 25px;
    text-transform: uppercase;
    font-family: "Archivo Black", sans-serif;
  }
`;

const InnerDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 175px;
    height: auto;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  input,
  button {
    margin: 5px 0px;
  }
  button {
    background-color: var(--red);
    color: white;
    text-transform: uppercase;
    border: none;
    width: 150px;
    padding: 5px 10px;
  }
`;

const Message = styled.div`
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  p {
    font-size: 0.8em;
  }
`;

// const Msg = styled.p`
//   font-size: 0.9em;
// `;
