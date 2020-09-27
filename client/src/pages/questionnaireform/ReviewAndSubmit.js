import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { postNewDiaryEntry } from "../../api/diary";
import { Link, useHistory } from "react-router-dom";

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
  button {
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
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userName = sessionStorage.getItem("userName");
  const date = new Date();

  const newDiaryEntry = {
    mood: formData.mood,
    dayInOneWord: formData.dayInOneWord,
    whatWasGood: formData.whatWasGood,
    whatCouldBeBetter: formData.whatCouldBeBetter,
    diaryEntry: formData.diaryEntry,
    userName,
    date: `${date.getUTCFullYear()}/${date.getMonth(
      +1
    )}/${date.getUTCDate()} ${date.getHours()}:${date.getMinutes()} Uhr`,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewDiaryEntry(newDiaryEntry);
      formData.mood = "5";
      formData.dayInOneWord = null;
      formData.whatWasGood = null;
      formData.whatCouldBeBetter = null;
      formData.diaryEntry = null;
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/questionnaire/submitmessage");
    }
  }

  let info;
  if (
    formData.dayInOneWord === null ||
    formData.whatWasGood === null ||
    formData.whatCouldBeBetter === null ||
    formData.diaryEntry === null
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
          <span>{formData.mood} von 10</span>
        </div>
        <div>
          <div>
            <span>Dein Tag in eimen Wort:</span>
            <Link to="/main/questionnaire/dayInOneWord">Bearbeiten...</Link>
          </div>
          <span>{formData.dayInOneWord}</span>
        </div>
        <div>
          <div>
            <span>Was lief heute gut:</span>
            <Link to="/main/questionnaire/whatWasGood">Bearbeiten...</Link>
          </div>
          <span>{formData.whatWasGood}</span>
        </div>
        <div>
          <div>
            <span>Was ginge besser:</span>
            <Link to="/main/questionnaire/whatCouldBeBetter">
              Bearbeiten...
            </Link>
          </div>
          <span>{formData.whatCouldBeBetter}</span>
        </div>
        <div>
          <div>
            <span>Dein Tagebucheintrag:</span>
            <Link to="/main/questionnaire/diaryEntry">Bearbeiten...</Link>
          </div>
          <span>{formData.diaryEntry}</span>
        </div>
        <button disabled={loading} type="submit" onClick={handleSubmit}>
          Abschicken
        </button>
        {error && <p>Something bad happened. Please try again.</p>}
      </>
    );
  }

  return <ReviewCard>{info}</ReviewCard>;
}

export default Review;

Review.propTypes = {
  setForm: PropTypes.any,
  formData: PropTypes.any,
  mood: PropTypes.any,
  dayInOneWord: PropTypes.string,
  whatWasGood: PropTypes.string,
  whatCouldBeBetter: PropTypes.string,
  diaryEntry: PropTypes.string,
};
