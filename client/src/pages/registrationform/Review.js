import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ReviewCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  padding: 1rem 1rem;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  & > div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    color: var(--text-color-attention);
    text-align: center;
  }
  & > div > div:first-child > span:first-child {
    color: var(--text-color-attention);
  }
  & > div > div > a,
  > a {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    text-align: center;
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    color: var(--text-color-normal);
  }
  & > h2 {
    text-align: center;
  }
`;

function Review({ setForm, formData }) {
  const {
    firstName,
    lastName,
    nickName,
    birthDay,
    userName,
    password,
    passwordRepeat,
    moodstername,
  } = formData;

  let info;
  if (
    firstName === null ||
    lastName === null ||
    nickName === null ||
    birthDay === null ||
    userName === null ||
    password === null ||
    passwordRepeat === null ||
    moodstername === null
  ) {
    info = (
      <>
        <div>
          Du scheinst Daten vergessen zu haben. Bitte schaue nochmal von Beginn
          an die Anmeldung durch und fülle alle Felder aus.
        </div>
        <Link to="/register">Klick hier um alles überprüfen...</Link>
      </>
    );
  } else if (password !== passwordRepeat) {
    info = (
      <>
        <div>Dein Passwort stimmt nicht überein. Bitte überprüfe dieses.</div>
        <Link to="/register/userlogin">Bearbeiten...</Link>
      </>
    );
  } else {
    info = (
      <>
        <h2>Lass uns deine Daten überprüfen</h2>
        <div>
          <div>
            <span>Nutzerdaten</span>
            <Link to="/register">Bearbeiten...</Link>
          </div>
          <div>
            <span>Vorname:</span> <span>{firstName}</span>
          </div>
          <div>
            <span>Nachname:</span> <span>{lastName}</span>
          </div>
          <div>
            <span>Spitzame:</span> <span>{nickName}</span>
          </div>
          <div>
            <span>Geburtsdatum:</span> <span>{birthDay}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Logindaten</span>
            <Link to="/register/userlogin">Bearbeiten...</Link>
          </div>
          <div>
            <span>Nutzername:</span> <span>{userName}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Moodster</span>
            <Link to="/register/moodster">Bearbeiten...</Link>
          </div>
          <div>
            <span>Ich heiße:</span> <span>{moodstername}</span>
          </div>
        </div>
        <Link to="/register/submit">Jetzt weiter zur Anmeldung...</Link>
      </>
    );
  }

  return <ReviewCard>{info}</ReviewCard>;
}

export default Review;

Review.propTypes = {
  setForm: PropTypes.any,
  formData: PropTypes.any,
  navigation: PropTypes.any,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  nickName: PropTypes.string,
  birtDay: PropTypes.string,
  userName: PropTypes.string,
  password: PropTypes.string,
  moodstername: PropTypes.string,
};
