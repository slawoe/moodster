import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";
import PropTypes from "prop-types";

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
    font-size: 3rem;
    color: var(--text-color-danger);
    grid-area: 3 / 2 / 4 / 3;
    margin: 0;
  }
  & > p {
    font-size: 1rem;
    text-align: center;
    grid-area: 4 / 2 / 5 / 3;
    margin: 0;
  }
`;

function ErrorPage({ message }) {
  return (
    <ErrorScreenWrapper>
      <img src={Moodster} alt="Logo" />
      <h1>ERROR...</h1>
      <p>{message}</p>
    </ErrorScreenWrapper>
  );
}

export default ErrorPage;

ErrorPage.propTypes = {
  message: PropTypes.string,
};
