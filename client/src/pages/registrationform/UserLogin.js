import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function UserLogin({ setForm, formData }) {
  const { nickName, userName, password, passwordRepeat } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>Super, {nickName}! Lass uns jetzt deine Anmeldedaten festlegen.</p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="Dein Nutzername?"
          name="userName"
          value={userName}
          placeholder="maxi.muster"
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Dein Passwort?"
          name="password"
          value={password}
          placeholder="Passwort"
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Bitte einmal wiederholen"
          name="passwordRepeat"
          value={passwordRepeat}
          placeholder="Passwort"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/register">
          <GoBackButton />
        </Link>
        <Link to="moodster">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}

export default UserLogin;

UserLogin.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};
