import React from "react";
import styled from "@emotion/styled";
import Plus from "../assets/icons/plus.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--link-active-color);
  & > span {
    padding: 1em;
    margin: 0;
  }
  & > img {
    width: 2em;
  }
`;

function AddButton({ onClick, description }) {
  return (
    <Button onClick={onClick}>
      <span>{description}</span>
      <img src={Plus} alt="Pluszeichen" />
    </Button>
  );
}

export default AddButton;
AddButton.propTypes = {
  onClick: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
};
