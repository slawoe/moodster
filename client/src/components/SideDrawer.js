import React from "react";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

const SideDrawer = styled.nav`
  height: 83%;
  position: fixed;
  background-color: var(--navigation-main-color);
  top: 10%;
  right: 0;
  width: 50%;
  z-index: 200;
  border: none;
  border-radius: 5px 0 0 5px;
`;

const SideDrawerList = styled.ul`
  list-style: none;
  height: 100%;
  & > li {
    margin: 5px;
  }
  & > li > a {
    text-decoration: none;
  }
`;

function Drawer() {
  return (
    <SideDrawer>
      <SideDrawerList>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/">1</Link>
        </li>
      </SideDrawerList>
    </SideDrawer>
  );
}

export default Drawer;
