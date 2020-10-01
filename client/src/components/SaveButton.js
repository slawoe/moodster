import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 1rem 1rem;
  color: var(--text-color-attention);
  border: none;
  background: transparent;
  float: right;
  & > a {
    color: var(--text-color-attention);
  }
`;

function SaveButton({ onClick }) {
  return <Button onClick={onClick}>Speichern...</Button>;
}

export default SaveButton;

SaveButton.propTypes = {
  onClick: PropTypes.func,
};
