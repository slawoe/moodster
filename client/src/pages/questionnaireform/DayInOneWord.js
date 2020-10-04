import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function DayInOneWord({ setForm, formData }) {
  const { dayInOneWord } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
            Ok, das habe ich mir aufgeschrieben. Lass uns weitermachen. Jetzt
            darfst Du kreativer werden. Beschreib mir deinen Tag in einem Wort.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="Dein Wort:"
          name="dayInOneWord"
          value={dayInOneWord}
          placeholder="Mein Wort"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/whatWasGood">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}

export default DayInOneWord;

DayInOneWord.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
