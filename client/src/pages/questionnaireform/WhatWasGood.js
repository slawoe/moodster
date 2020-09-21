import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function WhatWasGood({ setForm, formData }) {
  const { whatWasGood } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Ok, das haben wir geschafft. Weiter geht es. Es sind nur noch 3
            Fragen.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="Was lief heute?"
          name="whatWasGood"
          value={whatWasGood}
          placeholder="Was heute gut lief..."
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/dayInOneWord">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/whatCouldBeBetter">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default WhatWasGood;

WhatWasGood.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
};
