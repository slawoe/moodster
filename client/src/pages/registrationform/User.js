import React from "react";
import PropTypes from "prop-types";
import ItemForm from "../../components/ItemForm";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import NavigationWrapper from "../../components/FormNavigationWrapper";
import FormPageWrapper from "../../components/FormPageWrapper";
import FormWrapper from "../../components/FormWrapper";
import FormHeader from "../../components/FormHeader";
import BasicTextCard from "../../components/BasicTextCard";
import { useHistory } from "react-router-dom";

function User({ setForm, formData, navigation }) {
  const { firstName, lastName, nickName, birthDay } = formData;
  const { next } = navigation;
  const history = useHistory();

  return (
    <>
      <FormPageWrapper>
        <FormHeader>
          <BasicTextCard>
            <p>
              Hi, schön, dass Du hier bist. Lass uns ein wenig kennenlernen.
            </p>
          </BasicTextCard>
        </FormHeader>
        <FormWrapper>
          <ItemForm
            label="Wie heißt Du?"
            name="firstName"
            value={firstName}
            onChange={setForm}
          />
          <ItemForm
            label="Wie ist dein Nachname?"
            name="lastName"
            value={lastName}
            onChange={setForm}
          />
          <ItemForm
            label="Wie ist dein Spitzname?"
            name="nickName"
            value={nickName}
            onChange={setForm}
          />
          <ItemForm
            label="Wann bist Du geboren?"
            name="birthDay"
            value={birthDay}
            onChange={setForm}
          />
        </FormWrapper>
        <NavigationWrapper>
          <GoBackButton onClick={() => history.goBack()} />
          <NextButton onClick={next} />
        </NavigationWrapper>
      </FormPageWrapper>
    </>
  );
}
export default User;

User.propTypes = {
  setForm: PropTypes.any.isRequired,
  formData: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};
