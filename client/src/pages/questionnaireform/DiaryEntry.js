import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function DiaryEntry({ setForm, formData }) {
  const { diaryEntry } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Nun sind wir fast schon fertig, aber ich möchte unbedingt noch mehr
            über deinen Tag hören, was Du mir bisher noch nicht erzählt hast.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="Dein Tagebucheintrag:"
          name="diaryEntry"
          value={diaryEntry}
          placeholder="Was kannst Du mir noch erzählen?"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/whatCouldBeBetter">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/reviewandsubmit">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default DiaryEntry;

DiaryEntry.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
};
