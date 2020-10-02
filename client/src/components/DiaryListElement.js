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
  padding: 0.4rem 0.7rem 0;
  display: flex;
  flex-direction: column;
`;

const MainCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  color: var(--text-color-attention);
  & > div {
    padding: 0.5rem;
  }
  & > div > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
  }
`;

const CollapsingDiv = styled.div`
  padding: 0 0.5rem;
  & > div:last-of-type {
    padding: 0 0 0.5rem;
  }
`;

const DetailsInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
  & > span:first-of-type {
    padding-bottom: 0.4rem;
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
            <span>Dein Wort:</span>
            <span>{dayInOneWord}</span>
          </InfoElementWrapper>
        </div>
      </MainCardDiv>
      <CollapsingDiv>
        {open && (
          <>
            <DetailsInfoElement>
              <span>LIEF BESONDERS GUT:</span>
              <span>{whatWasGood}</span>
            </DetailsInfoElement>
            <DetailsInfoElement>
              <span>HÄTTE BESSER LAUFEN KÖNNEN:</span>
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
  date: PropTypes.string,
  mood: PropTypes.string,
  dayInOneWord: PropTypes.string,
  whatWasGood: PropTypes.string,
  whatCouldBeBetter: PropTypes.string,
  diaryEntry: PropTypes.string,
};
