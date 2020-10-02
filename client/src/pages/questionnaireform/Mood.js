import React from "react";
import PropTypes from "prop-types";
import SliderInputField from "../../components/SliderInput";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function Mood({ setForm, formData }) {
  const { mood } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Super, lass uns gleich loslegen. Ich habe ein paar Fragen an dich.
            Mit dem Regler unter den Smileys kannst Du mir gleich die erste
            beantworten.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <SliderInputField
          type="range"
          min="1"
          max="10"
          label="Wie geht es dir heute?"
          name="mood"
          value={mood}
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/dayInOneWord">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default Mood;

Mood.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
