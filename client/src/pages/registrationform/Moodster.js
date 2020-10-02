import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function Moodster({ setForm, formData }) {
  const { moodstername } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Das hast Du toll gemacht. Aber ich hätte eine letzte Bitte. Ich will
            auch einen Namen haben.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="Wie soll ich heißen?"
          name="moodstername"
          value={moodstername}
          placeholder="Moody"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/register/userlogin">
          <GoBackButton />
        </Link>
        <Link to="/register/review">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default Moodster;

Moodster.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
