import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";

const LoadingScreenWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 3em;
  }
`;

function LoadingPage() {
  return (
    <LoadingScreenWrapper>
      <img src={Moodster} alt="Logo" />
      <h1>LOADING</h1>
    </LoadingScreenWrapper>
  );
}

export default LoadingPage;
