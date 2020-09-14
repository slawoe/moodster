import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const BasicTextDiv = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  & > h1 {
    font-size: 1.4em;
    padding: 0.6em;
    margin: 0px;
  }
  & > p {
    padding: 1em;
    margin: 0;
  }
`;

function OnePageTextContainer({ h1, text }) {
  return (
    <BasicTextDiv>
      <h1>{h1}</h1>
      <p>{text}</p>
    </BasicTextDiv>
  );
}

export default OnePageTextContainer;

OnePageTextContainer.propTypes = {
  h1: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
