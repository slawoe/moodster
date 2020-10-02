import React from "react";
import styled from "@emotion/styled";
import BackArrow from "../assets/icons/backarrow.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-normal);
  & > span {
    padding: 1rem;
    margin: 0;
  }
  & > img {
    width: 2rem;
  }
`;

function GoBackButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <img src={BackArrow} alt="backarrow" />
      <span>ZURÜCK</span>
    </Button>
  );
}

export default GoBackButton;
GoBackButton.propTypes = {
  onClick: PropTypes.func,
};
