import React, { useState } from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";
import { Link, useHistory } from "react-router-dom";
import { fetchUserLogin } from "../api/user";

const LoginWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 20% 32% 38% 10%;
  justify-items: center;
  & > h1 {
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & div > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    color: var(--inputfield-text-color);
    font-family: "Silom";
    padding: 0.5rem 0.5rem;
  }
  & div > span {
    padding: 0.4rem 0;
    font-size: 1.25rem;
  }
  & div > button {
    align-self: center;
    background-color: var(--button-main-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    font-family: "Silom";
    color: var(--inputfield-text-color);
    width: 6rem;
    height: 2rem;
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
  & > a {
    color: var(--inputfield-text-color);
    align-content: center;
    font-size: 1.25rem;
  }
`;

function LoginPage() {
  const history = useHistory();
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  function userNameChange(userName) {
    setUserName(userName.target.value);
  }
  function passwordChange(password) {
    setPassword(password.target.value);
  }

  async function Login() {
    const newUser = await fetchUserLogin(userName);
    if (!newUser) {
      setError(true);
      return;
    }
    if (password !== newUser.password || userName !== newUser.userName) {
      setError(true);
    } else {
      sessionStorage.userID = newUser._id;
      sessionStorage.nickName = newUser.nickName;
      history.push("/main");
    }
  }

  return (
    <LoginWrapper>
      <h1>MOODSTER</h1>
      <img src={Moodster} alt="Logo" />
      <div>
        <input
          name="userName"
          placeholder="max.mustermann"
          onChange={userNameChange}
        />
        <span>Benutzername</span>
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          onChange={passwordChange}
        />
        <span>Passwort</span>
        <button type="submit" onClick={Login}>
          LOGIN
        </button>
      </div>
      <Link to="/register">NEU HIER? ANMELDEN...</Link>
      {error && <p>NUTZERNAME ODER PASSWORT FALSCH!</p>}
    </LoginWrapper>
  );
}

export default LoginPage;
