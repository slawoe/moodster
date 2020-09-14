import React from "react";
import styled from "@emotion/styled";
import Diary from "../assets/icons/diary.svg";
import Questionnaire from "../assets/icons/questionnaire.svg";
import Medics from "../assets/icons/medics.svg";
import Analyse from "../assets/icons/analysis.svg";
import { Link } from "react-router-dom";

const MainFooter = styled.footer`
  background: var(--navigation-main-color);
  border: none;
  box-shadow: 0 -3px 6px #00000029;
  grid-area: 3 / 1 / 4 / 4;
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
