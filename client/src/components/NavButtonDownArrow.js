import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import DownArrow from "../assets/icons/downarrow.svg";
import { Link } from "react-router-dom";

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-normal);
  & > span {
    font-size: 0.7em;
  }
`;

function NavButtonDownArrow({ description, to }) {
  return (
    <Link to={to}>
      <ButtonWrapper>
        <span>{description}</span>
        <img src={DownArrow} alt="Pfeil nach unten" />
      </ButtonWrapper>
    </Link>
  );
}

export default NavButtonDownArrow;

NavButtonDownArrow.propTypes = {
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
