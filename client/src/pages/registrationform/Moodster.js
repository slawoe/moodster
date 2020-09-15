import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import NavigationWrapper from "../../components/FormNavigationWrapper";
import FormPageWrapper from "../../components/FormPageWrapper";
import FormWrapper from "../../components/FormWrapper";
import FormHeader from "../../components/FormHeader";
import BasicTextCard from "../../components/BasicTextCard";

function Moodster({ setForm, formData, navigation }) {
  const { moodstername } = formData;
  const { previous, next } = navigation;

  return (
    <>
      <FormPageWrapper>
        <FormHeader>
          <BasicTextCard>
            <p>
              Das hast Du toll gemacht. Aber ich hätte eine letzte Bitte. Ich
              will auch einen Namen haben.
            </p>
          </BasicTextCard>
        </FormHeader>
        <FormWrapper>
          <InputField
            label="Wie soll ich heißen?"
            name="moodstername"
            value={moodstername}
            onChange={setForm}
          />
        </FormWrapper>
        <NavigationWrapper>
          <GoBackButton onClick={previous} />
          <NextButton onClick={next} />
        </NavigationWrapper>
      </FormPageWrapper>
    </>
  );
}
export default Moodster;

Moodster.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};
