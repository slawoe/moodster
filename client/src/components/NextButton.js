import React from "react";
import styled from "@emotion/styled";
import FrontArrow from "../assets/icons/gotoarrow.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  justify-content: flex-end;
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

function NextPageButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <span>WEITER</span>
      <img src={FrontArrow} alt="backarrow" />
    </Button>
  );
}

export default NextPageButton;

NextPageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
