import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function WhatCouldBeBetter({ setForm, formData }) {
  const { whatCouldBeBetter } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Super. Lass uns über die nächste Frage kurz ein wenig nachdenken und
            dann kannst Du in die Tasten hauen.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="Was hätte besser laufen können?"
          name="whatCouldBeBetter"
          value={whatCouldBeBetter}
          placeholder="Das hätte besser laufen können..."
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/whatWasGood">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/diaryEntry">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default WhatCouldBeBetter;

WhatCouldBeBetter.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
