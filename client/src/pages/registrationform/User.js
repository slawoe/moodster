import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function User({ setForm, formData }) {
  const { firstName, lastName, nickName, birthDay } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>Hi, schön, dass Du hier bist. Lass uns ein wenig kennenlernen.</p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="Wie heißt Du?"
          name="firstName"
          value={firstName}
          placeholder="Max"
          onChange={setForm}
        />
        <InputField
          label="Wie ist dein Nachname?"
          name="lastName"
          value={lastName}
          placeholder="Mustermann"
          onChange={setForm}
        />
        <InputField
          label="Wie ist dein Spitzname?"
          name="nickName"
          value={nickName}
          placeholder="Maxi"
          onChange={setForm}
        />
        <InputField
          label="Wann bist Du geboren?"
          name="birthDay"
          value={birthDay}
          placeholder="01.01.2010"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/">
          <GoBackButton />
        </Link>
        <Link to="register/userlogin">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default User;

User.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};
