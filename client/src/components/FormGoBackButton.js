import React from "react";
import styled from "@emotion/styled";
import BackArrow from "../assets/icons/backarrow.svg";
import PropTypes from "prop-types";

const BackButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-normal);
  & > span {
    padding: 1em;
    margin: 0;
  }
  & > img {
    width: 20%;
  }
`;

function GoBackButton({ onClick, previous }) {
  return (
    <BackButton onClick={() => onClick(previous)}>
      <img src={BackArrow} alt="backarrow" />
      <span>ZURÜCK</span>
    </BackButton>
  );
}

export default GoBackButton;

GoBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  previous: PropTypes.any.isRequired,
};
