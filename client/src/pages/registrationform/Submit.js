import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import Moodster from "../../assets/images/moodster.svg";
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
  & > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    margin-top: 3em;
  }
  & > img {
    margin-top: 3em;
  }
`;

function Submit({ setForm, formData, navigation }) {
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
  const history = useHistory();

  return (
    <SubmitCard>
      <span>
        Danke {nickName}! Wenn Du jetzt die Anmeldung abschickst, kümmert sich{" "}
        {moodstername} um alles weitere und Du kannst dir die App in Ruhe
        anschauen.
      </span>
      <button
        onClick={() => {
          console.log("Angemeldet");
          setForm = null;
          history.push("/diary");
        }}
      >
        Anmeldung absenden und App anschauen...
      </button>
      <img src={Moodster} alt="moodster"></img>
    </SubmitCard>
  );
}

export default Submit;

Submit.propTypes = {
  navigation: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  go: PropTypes.any.isRequired,
  setForm: PropTypes.any.isRequired,
};
