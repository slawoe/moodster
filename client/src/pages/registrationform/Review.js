import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ReviewCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  padding: 1em 1em;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  & > div {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    color: var(--text-color-attention);
  }
  & > div > div:first-child > span:first-child {
    color: var(--text-color-attention);
  }
  & > div > div > button,
  > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    color: var(--text-color-normal);
  }
`;

function Review({ setForm, formData, navigation }) {
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
  const { go } = navigation;

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
    return (
      <ReviewCard>
        <div>
          Du scheinst Daten vergessen zu haben. Bitte schaue nochmal von Beginn
          an die Anmeldung durch und fülle alle Felder aus.
        </div>
        <button onClick={() => go("user")}>
          Klick hier um alles überprüfen...
        </button>
      </ReviewCard>
    );
  } else if (password !== passwordRepeat) {
    return (
      <ReviewCard>
        <div>Dein Passwort stimmt nicht überein. Bitte überprüfe dieses.</div>
        <button onClick={() => go("userlogin")}>Bearbeiten...</button>
      </ReviewCard>
    );
  } else {
    return (
      <ReviewCard>
        <h2>Lass uns deine Daten überprüfen</h2>
        <div>
          <div>
            <span>Nutzerdaten</span>
            <button onClick={() => go("user")}>Bearbeiten...</button>
          </div>
          <div>
            <span>Vorname:</span> <span>{`${firstName}`}</span>
          </div>
          <div>
            <span>Nachname:</span> <span>{`${lastName}`}</span>
          </div>
          <div>
            <span>Spitzame:</span> <span>{`${nickName}`}</span>
          </div>
          <div>
            <span>Geburtsdatum:</span> <span>{`${birthDay}`}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Logindaten</span>
            <button onClick={() => go("userlogin")}>Bearbeiten...</button>
          </div>
          <div>
            <span>Nutzername:</span> <span>{`${userName}`}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Moodster</span>
            <button onClick={() => go("moodster")}>Bearbeiten...</button>
          </div>
          <div>
            <span>Ich heiße:</span> <span>{`${moodstername}`}</span>
          </div>
        </div>
        <button onClick={() => go("submit")}>
          Jetzt weiter zur Anmeldung...
        </button>
      </ReviewCard>
    );
  }
}
export default Review;

Review.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  birtDay: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  moodstername: PropTypes.string.isRequired,
};
