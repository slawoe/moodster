import React from "react";
import styled from "@emotion/styled";
import FrontArrow from "../assets/icons/gotoarrow.svg";
import PropTypes from "prop-types";

const NextButton = styled.button`
  width: 50%;
  display: flex;
  justify-content: flex-end;
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

function NextPageButton({ onClick, next }) {
  return (
    <NextButton onClick={() => onClick(next)}>
      <span>WEITER</span>
      <img src={FrontArrow} alt="backarrow" />
    </NextButton>
  );
}

export default NextPageButton;

NextPageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  next: PropTypes.any.isRequired,
};
