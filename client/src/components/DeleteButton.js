import React from "react";
import styled from "@emotion/styled";
import Trash from "../assets/icons/trash.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-danger);
  & > span {
    padding: 1em;
    margin: 0;
  }
  & > img {
    width: 2em;
  }
`;

function DeleteButton({ onClick, description }) {
  return (
    <Button onClick={onClick}>
      <img src={Trash} alt="Mülleimer" />
      <span>{description}</span>
    </Button>
  );
}

export default DeleteButton;

DeleteButton.propTypes = {
  onClick: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
};
