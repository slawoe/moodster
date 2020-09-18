import React from "react";
import PropTypes from "prop-types";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";
import { Link } from "react-router-dom";
import Moodster from "../assets/images/moodster.svg";

function Welcome({ children }) {
  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <StyledTextContainer>
            <p>Hallo NICKNAME!</p>
            <p>Ich freue mich, dass Du da bist!</p>
          </StyledTextContainer>
          <StyledTextContainer>
            <p>
              Lass uns am besten gleich nachschauen, ob es für heute noch
              Fragebögen gibt, die Du beantworten musst.
            </p>
            <p>
              <Link to="/main/questionnaires">Klick dazu: hier</Link>
              <img src={Moodster} alt="Logo" />
            </p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element.isRequired,
};
