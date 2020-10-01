import React from "react";
import styled from "@emotion/styled";
import Moodster from "../../assets/images/moodster.svg";
import { Link } from "react-router-dom";

const SubmitCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 0.5rem 0 0;
  padding: 1rem 1rem;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
  & > a > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    margin-top: 3rem;
  }
  & > img {
    margin-top: 3rem;
  }
`;

function SubmitMessage() {
  return (
    <SubmitCard>
      <span>
        Danke für deinen Eintrag. Ich hab alles aufgeschrieben und gespeichert.
        Willst Du dich noch etwas umsehen?
      </span>
      <Link to="/main">
        <button>Zurück zur Hauptseite</button>
      </Link>
      <img src={Moodster} alt="moodster"></img>
    </SubmitCard>
  );
}

export default SubmitMessage;
