import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";

const ErrorScreenWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 30% 25% 10% 35%;
  grid-template-columns: 20% 60% 20%;
  justify-items: center;
  & > img {
    grid-area: 2 / 2 / 3 / 3;
  }
  & > h1 {
    font-size: 3em;
    color: var(--text-color-danger);
    grid-area: 3 / 2 / 4 / 3;
    margin: 0;
  }
  & > p {
    font-size: 1.2em;
    text-align: center;
    grid-area: 4 / 2 / 5 / 3;
    margin: 0;
  }
`;

function ErrorPage() {
  return (
    <ErrorScreenWrapper>
      <img src={Moodster} alt="Logo" />
      <h1>ERROR...</h1>
      <p>Lorem ipsum sit dolor amet Fehlermeldung</p>
    </ErrorScreenWrapper>
  );
}

export default ErrorPage;
