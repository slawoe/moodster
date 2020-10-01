import React from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";

const LoadingScreenWrapper = styled.div`
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
    grid-area: 3 / 2 / 4 / 3;
    margin: 0;
  }
`;

function LoadingPage() {
  return (
    <LoadingScreenWrapper>
      <img src={Moodster} alt="Logo" />
      <h1>LOADING...</h1>
    </LoadingScreenWrapper>
  );
}

export default LoadingPage;
