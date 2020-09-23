import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InfoElementWrapper from "./InfoElementWrapper";

const DiaryListItem = styled.div`
  background: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  padding: 0.4em 0.7em 0;
  display: flex;
  flex-direction: column;
`;

const MainCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4em;
  color: var(--text-color-attention);
  & > div > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
  }
`;

const CollapsingDiv = styled.div`
  & > div:last-child {
    padding: 0 0 0.5em;
  }
`;

const DetailsInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5em;
  & > span:first-child {
    padding-bottom: 0.4em;
    color: var(--text-color-attention);
  }
`;

function DiaryListElement({
  date,
  mood,
  dayInOneWord,
  whatWasGood,
  whatCouldBeBetter,
  diaryEntry,
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <DiaryListItem>
      <MainCardDiv>
        <HeaderDiv>
          <div>TAGEBUCH-EINTRAG</div>
          <div>
            <button onClick={handleClick}>Details...</button>
          </div>
        </HeaderDiv>
        <div>
          <InfoElementWrapper>
            <span>Datum:</span>
            <span>{date}</span>
          </InfoElementWrapper>
          <InfoElementWrapper>
            <span>Stimmung:</span>
            <span>{mood} von 10</span>
          </InfoElementWrapper>
          <InfoElementWrapper>
            <span>Dein Tag in einem Wort:</span>
            <span>{dayInOneWord}</span>
          </InfoElementWrapper>
        </div>
      </MainCardDiv>
      <CollapsingDiv>
        {open && (
          <>
            <DetailsInfoElement>
              <span>WAS LIEF BESONDERS GUT:</span>
              <span>{whatWasGood}</span>
            </DetailsInfoElement>
            <DetailsInfoElement>
              <span>WAS HÄTTE BESSER LAUFEN KÖNNEN:</span>
              <span>{whatCouldBeBetter}</span>
            </DetailsInfoElement>
            <DetailsInfoElement>
              <span>DEIN TAGEBUCHEINTRAG:</span>
              <span>{diaryEntry}</span>
            </DetailsInfoElement>
          </>
        )}
      </CollapsingDiv>
    </DiaryListItem>
  );
}

export default DiaryListElement;

DiaryListElement.propTypes = {
  date: PropTypes.any.isRequired,
  mood: PropTypes.any.isRequired,
  dayInOneWord: PropTypes.any.isRequired,
  whatWasGood: PropTypes.any.isRequired,
  whatCouldBeBetter: PropTypes.any.isRequired,
  diaryEntry: PropTypes.any.isRequired,
};
