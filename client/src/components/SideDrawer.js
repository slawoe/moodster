import React from "react";
import styled from "@emotion/styled";
import Diary from "../assets/icons/diaryslim.svg";
import Questionnaire from "../assets/icons/questionslim.svg";
import Medics from "../assets/icons/medicsslim.svg";
import Analyse from "../assets/icons/analysisslim.svg";
import Links from "../assets/icons/at.svg";
import Doctor from "../assets/icons/doctor.svg";
import Help from "../assets/icons/laptop.svg";
import About from "../assets/icons/information.svg";
import Profile from "../assets/icons/user.svg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const SideDrawer = styled.nav`
  height: 82.5vh;
  width: 70vw;
  position: absolute;
  transition: transform 0.5s ease-in-out;
  background-color: var(--navigation-main-color);
  top: 10.25vh;
  right: 0;
  border: none;
  border-radius: 5px 0 0 5px;
  box-shadow: -3px 0 6px #00000029;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(103%)")};
`;

const SideDrawerList = styled.ul`
  list-style: none;
  height: 83vh;
  margin: 0;
  margin-left: 10vw;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > li > a {
    text-decoration: none;
    color: var(--link-active-color);
    display: flex;
    align-items: center;
  }
  & > li > a > img {
    width: 4vh;
    padding: 5px 0;
  }
  & > li > a > span {
    padding-left: 10%;
  }
`;

function Drawer({ open, onClick }) {
  return (
    <SideDrawer open={open} onClick={() => onClick(!open)}>
      <SideDrawerList>
        <li>
          <Link to="/main/diary">
            <img src={Diary} alt="Tagebuch" />
            <span>Tagebuch</span>
          </Link>
        </li>
        <li>
          <Link to="/main/questionnaire">
            <img src={Questionnaire} alt="Fragebögen" />
            <span>Tagebuch-Eintrag</span>
          </Link>
        </li>
        <li>
          <Link to="/main/medics">
            <img src={Medics} alt="Medikamente" />
            <span>Medikamente</span>
          </Link>
        </li>
        <li>
          <Link to="/main/analysis">
            <img src={Analyse} alt="Analyse" />
            <span>Analyse</span>
          </Link>
        </li>
        <li>
          <Link to="/main/doctors">
            <img src={Doctor} alt="Doctor" />
            <span>Meine Ärzte</span>
          </Link>
        </li>
        <li>
          <Link to="/main/profile">
            <img src={Profile} alt="Profile" />
            <span>Profil</span>
          </Link>
        </li>
        <li>
          <Link to="/main/links">
            <img src={Links} alt="Link" />
            <span>Anlaufstellen</span>
          </Link>
        </li>
        <li>
          <Link to="/main/help">
            <img src={Help} alt="Help" />
            <span>Hilfe</span>
          </Link>
        </li>
        <li>
          <Link to="/main/about">
            <img src={About} alt="About" />
            <span>Über Moodster</span>
          </Link>
        </li>
      </SideDrawerList>
    </SideDrawer>
  );
}

export default Drawer;

Drawer.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
