import React from "react";
import styled from "@emotion/styled";
import MenuBurger from "../assets/icons/menuburger.svg";
import PropTypes from "prop-types";

const ToggleButton = styled.button`
  border: none;
  background: transparent;
  & button:focus {
    outline: none;
  }
`;

function DrawerToggleButton({ onClick }) {
  return (
    <ToggleButton onClick={() => onClick()}>
      <img src={MenuBurger} alt="Menü"></img>
    </ToggleButton>
  );
}

export default DrawerToggleButton;

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
