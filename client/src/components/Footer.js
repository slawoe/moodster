import React from "react";
import styled from "@emotion/styled";
import Diary from "../assets/icons/diary.svg";
import Questionnaire from "../assets/icons/questionnare.svg";
import Medics from "../assets/icons/medics.svg";
import Analyse from "../assets/icons/analyse.svg";
import { Link } from "react-router-dom";

const MainFooter = styled.footer`
  background: var(--navigation-main-color);
  border: none;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 -3px 6px #00000029;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
`;

const FooterNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 100%;
  & > a {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & > a > img {
    height: 75%;
  }
`;

function Footer() {
  return (
    <MainFooter>
      <FooterNavigation>
        <Link to="/diary">
          <img src={Diary} alt="Tagebuch" />
        </Link>
        <Link to="/questionnaire">
          <img src={Questionnaire} alt="Fragebögen" />
        </Link>
        <Link to="/medics">
          <img src={Medics} alt="Medikamente" />
        </Link>
        <Link to="/analyse">
          <img src={Analyse} alt="Auswertung" />
        </Link>
      </FooterNavigation>
    </MainFooter>
  );
}

export default Footer;
