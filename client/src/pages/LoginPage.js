import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 20% 32% 38% 10%;
  justify-items: center;
  & > h1 {
    font-size: 3em;
  }
  & > form {
    display: flex;
    flex-direction: column;
  }
  & form > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    color: var(--inputfield-text-color);
    font-family: "Silom";
    padding: 0.5em 0.5em;
  }
  & form > span {
    padding: 0.4em 0;
    font-size: 1.25em;
  }
  & form > button {
    background-color: var(--button-main-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    font-family: "Silom";
    color: var(--inputfield-text-color);
    width: 6em;
    height: 2em;
    font-size: 1.25em;
    align-self: center;
    margin-top: 0.5em;
  }
  & > a {
    color: var(--inputfield-text-color);
    align-content: center;
    font-size: 1.25em;
  }
`;

function LoginPage() {
  return (
    <LoginWrapper>
      <h1>MOODSTER</h1>
      <img src={Moodster} alt="Logo" />
      <form>
        <input placeholder="max.mustermann"></input>
        <span>Benutzername</span>
        <input type="password" placeholder="Passwort"></input>
        <span>Passwort</span>
        <button type="submit">LOGIN</button>
      </form>
      <Link to="/register">NEU HIER? ANMELDEN...</Link>
    </LoginWrapper>
  );
}

export default LoginPage;
