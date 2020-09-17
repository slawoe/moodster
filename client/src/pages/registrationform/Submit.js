import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Moodster from "../../assets/images/moodster.svg";
import { Link } from "react-router-dom";

const SubmitCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  padding: 1em 1em;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  & > a > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    margin-top: 3em;
  }
  & > img {
    margin-top: 3em;
  }
`;

function Submit({ setForm, formData }) {
  const {
    // firstName,
    // lastName,
    nickName,
    // birthDay,
    // userName,
    // password,
    // passwordRepeat,
    moodstername,
  } = formData;

  return (
    <SubmitCard>
      <span>
        Danke {nickName}! Wenn Du jetzt die Anmeldung abschickst, kümmert sich{" "}
        {moodstername} um alles weitere und Du kannst dir die App in Ruhe
        anschauen.
      </span>
      <Link to="/main/onboarding">
        <button
          onClick={() => {
            console.log("TaDa");
            setForm = null;
          }}
        >
          Anmeldung absenden und App anschauen...
        </button>
      </Link>
      <img src={Moodster} alt="moodster"></img>
    </SubmitCard>
  );
}

export default Submit;

Submit.propTypes = {
  formData: PropTypes.any.isRequired,
  setForm: PropTypes.any.isRequired,
};
