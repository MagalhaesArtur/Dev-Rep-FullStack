import React, { useState, useContext } from "react";
import logo from "./astronaut.svg";
import "../styles/LoginPage.css";

import { AuthContext } from "../contexts/auth";

const LoginPage = () => {
  const { authenticaded, user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h1>
          Log In
          <br />
          And See Your Git Repositories
        </h1>
        <img className="logo" src={logo} alt="astronauta" />
      </div>
      <div className="rightContainer">
        <div className="cardLogin">
          <h1>Log In</h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="inputField">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="E-mail"
                name="email"
                id="email"
              />
            </div>
            <div className="inputField">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
            <button className="btn" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
      {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
    </div>
  );
};

export default LoginPage;
