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
  padding: 1em 1em;
  grid-area: 2 / 2 / 3 / 3;
  height: 90%;
  & > h2 {
    font-size: 1.2em;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }
  & a,
  a > button {
    color: var(--button-proceed-color);
    text-align: center;
    border: none;
    background: transparent;
  }
  & > div > div {
    color: var(--text-color-attention);
    display: flex;
    justify-content: space-between;
  }
  & > div > span {
    align-self: flex-end;
    width: 100%;
    padding: 1em 0 0;
    color: var(--text-color-normal);
  }
`;

function Review({ setForm, formData }) {
  const {
    mood,
    dayInOneWord,
    whatWasGood,
    whatCouldBeBetter,
    diaryEntry,
  } = formData;

  let info;
  if (
    dayInOneWord === null ||
    whatWasGood === null ||
    whatCouldBeBetter === null ||
    diaryEntry === null
  ) {
    info = (
      <>
        <div>
          Du scheinst etwas nicht ausgefüllt zu haben. Bitte schaue nochmal
          alles durch und fülle die Felder aus.
        </div>
        <Link to="/main/questionnaire">Klick hier um alles überprüfen...</Link>
      </>
    );
  } else {
    info = (
      <>
        <h2>Lass uns das kurz angucken</h2>
        <div>
          <div>
            <span>Deine Stimmung:</span>
            <Link to="/main/questionnaire">Bearbeiten...</Link>
          </div>
          <span>{mood} von 10</span>
        </div>
        <div>
          <div>
            <span>Dein Tag in eimen Wort:</span>
            <Link to="/main/questionnaire/dayInOneWord">Bearbeiten...</Link>
          </div>
          <span>{dayInOneWord}</span>
        </div>
        <div>
          <div>
            <span>Was lief heute gut:</span>
            <Link to="/main/questionnaire/whatWasGood">Bearbeiten...</Link>
          </div>
          <span>{whatWasGood}</span>
        </div>
        <div>
          <div>
            <span>Was ginge besser:</span>
            <Link to="/main/questionnaire/whatCouldBeBetter">
              Bearbeiten...
            </Link>
          </div>
          <span>{whatCouldBeBetter}</span>
        </div>
        <div>
          <div>
            <span>Dein Tagebucheintrag:</span>
            <Link to="/main/questionnaire/diaryEntry">Bearbeiten...</Link>
          </div>
          <span>{diaryEntry}</span>
        </div>

        <Link to="/main/questionnaire/submitmessage">
          <button
            onClick={() => {
              setForm = null;
            }}
          >
            Jetzt abschicken...
          </button>
        </Link>
      </>
    );
  }

  return <ReviewCard>{info}</ReviewCard>;
}

export default Review;

Review.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  mood: PropTypes.any.isRequired,
  dayInOneWord: PropTypes.string.isRequired,
  whatWasGood: PropTypes.string.isRequired,
  whatCouldBeBetter: PropTypes.string.isRequired,
  diaryEntry: PropTypes.string.isRequired,
};
