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

function UserLogin({ setForm, formData, navigation }) {
  const { nickName, userName, password, passwordRepeat } = formData;
  const { previous, next } = navigation;

  return (
    <FormPageWrapper>
      <FormHeader>
        <BasicTextCard>
          <p>Super, {nickName}! Lass uns jetzt deine Anmeldedaten festlegen.</p>
        </BasicTextCard>
      </FormHeader>
      <FormWrapper>
        <InputField
          label="Dein Nutzername?"
          name="userName"
          value={userName}
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Dein Passwort?"
          name="password"
          value={password}
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Bitte einmal wiederholen"
          name="passwordRepeat"
          value={passwordRepeat}
          onChange={setForm}
        />
      </FormWrapper>
      <NavigationWrapper>
        <GoBackButton onClick={previous} />
        <NextButton onClick={next} />
      </NavigationWrapper>
    </FormPageWrapper>
  );
}

export default UserLogin;

UserLogin.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};