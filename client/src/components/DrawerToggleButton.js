import React from "react";
import styled from "@emotion/styled";
import MenuBurger from "../assets/icons/menu.svg";
import PropTypes from "prop-types";

const ToggleButton = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
`;

function DrawerToggleButton({ onClick, open }) {
  return (
    <ToggleButton open={open} onClick={() => onClick(!open)}>
      <img src={MenuBurger} alt="Menü"></img>
    </ToggleButton>
  );
}

export default DrawerToggleButton;

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};
