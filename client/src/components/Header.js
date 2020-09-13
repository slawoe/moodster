import React, { useState } from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";
import DrawerToggleButton from "./DrawerToggleButton";
import CallButton from "./CallButton";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";

const MainHeader = styled.header`
  background: var(--navigation-main-color);
  border: none;
  border-radius: 0;
  box-shadow: var(--main-elements-shadow);
  grid-area: 1 / 1 / 2/ 4;
  position: relative;
  display: grid;
  grid-template-columns: 10% 16% 16% 16% 16% 16% 10%;
  grid-template-rows: 10% 20% 40% 20% 10%;
  height: 100%;
  & > button {
    position: absolute;
    top: 50%;
    left: 5%;
  }
`;

const HeaderNavigation = styled.nav`
  grid-area: 1 / 4 / 6/ 8;
  display: grid;
  grid-template-columns: 27.5% 27.5% 15% 15% 15%;
  grid-template-rows: 10% 20% 40% 20% 10%;
  & > :nth-child(1) {
    grid-area: 2 / 1 / 5/ 2;
  }
  & > :nth-child(1) > img {
    height: 100%;
  }
  & > :nth-child(2) {
    grid-area: 3 / 4 / 4/ 5;
  }
  & > :nth-child(2) > img {
    height: 100%;
  }
`;

function Header() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  return (
    <>
      <MainHeader>
        <CallButton />
        <HeaderNavigation>
          <Link to="/">
            <img src={Moodster} alt="Home" />
          </Link>
          <DrawerToggleButton
            onClick={() => setSideDrawerOpen(!sideDrawerOpen)}
            open={sideDrawerOpen}
          ></DrawerToggleButton>
        </HeaderNavigation>
        <SideDrawer
          open={sideDrawerOpen}
          setSideDrawerOpen={sideDrawerOpen}
        ></SideDrawer>
      </MainHeader>
    </>
  );
}

export default Header;
