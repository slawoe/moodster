import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import GoBackButton from "./GoBackButton";

const ExplanationWrapper = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div > h1 {
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0px;
  }
  & > div > p {
    padding: 1rem;
    margin: 0;
  }
  & > div:last-child {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
  }
`;

function ExplanationContent({ h1, p, onClick }) {
  return (
    <ExplanationWrapper>
      <div>
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      <div>
        <GoBackButton onClick={onClick} />
      </div>
    </ExplanationWrapper>
  );
}

export default ExplanationContent;

ExplanationContent.propTypes = {
  h1: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
