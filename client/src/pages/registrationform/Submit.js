import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Moodster from "../../assets/images/moodster.svg";
import { useHistory } from "react-router-dom";
import { postNewUser } from "../../api/user";

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
  & button {
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
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewUser(formData);
      sessionStorage.userName = formData.userName;
      formData.firstName = null;
      formData.lastName = null;
      formData.nickName = null;
      formData.birthDay = null;
      formData.userName = null;
      formData.password = null;
      formData.repeatPassword = null;
      formData.moodsterName = null;
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/help");
    }
  }

  return (
    <SubmitCard>
      <span>
        Danke {formData.nickName}! Wenn Du jetzt die Anmeldung abschickst,
        kümmert sich {formData.moodstername} um alles weitere und Du kannst dir
        die App in Ruhe anschauen.
      </span>
      <button disabled={loading} type="submit" onClick={handleSubmit}>
        Anmeldung absenden und App anschauen...
      </button>
      {error && <p>Something bad happened. Please try again.</p>}
      <img src={Moodster} alt="moodster"></img>
    </SubmitCard>
  );
}

export default Submit;

Submit.propTypes = {
  formData: PropTypes.any,
  setForm: PropTypes.any,
};
