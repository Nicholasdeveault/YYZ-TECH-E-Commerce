import React from "react";
import styled from "styled-components";

import { useState } from "react";

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
        <p>Join our mailing list!</p>
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
      </InnerDiv>
      <Message>
        <Msg>{message}</Msg>
      </Message>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid black;
  padding: 10px 0px;
  background-color: black;
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
  button {
    border: 1px solid white;
    background-color: transparent;
    color: white;
    border-radius: 3px;
  }
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 0.9em;
    margin-top: 5px;
  }
`;

const Message = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`;

const Msg = styled.p`
  font-size: 10px;
  text-align: center;
`;
