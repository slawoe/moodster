import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";

const ErrorScreenWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 3em;
    color: var(--text-color-danger);
    margin-bottom: 0.2em;
  }
  & > p {
    font-size: 1.2em;
    text-align: center;
    margin-top: 0;
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
