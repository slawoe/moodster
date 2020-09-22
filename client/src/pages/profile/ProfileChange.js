import React from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";

const mockupData = {
  firstName: "Max",
  lastName: "Mustermann",
  nickName: "Maxi",
  birthDay: "01.01.2010",
  userName: "maxi.muster",
  moodstername: "Moody",
};

function About() {
  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <StyledTextContainer>
            <h1>Dein Profil</h1>
            <InputFieldChangeData
              label={"Vorname:"}
              name="firstName"
              value={mockupData.firstName}
              placeholder={mockupData.firstName}
            />
            <InputFieldChangeData
              label={"Nachname:"}
              name="lastName"
              value={mockupData.lastName}
              placeholder={mockupData.lastName}
            />
            <InputFieldChangeData
              label={"Spitzname:"}
              name="nickName"
              value={mockupData.nickName}
              placeholder={mockupData.nickName}
            />
            <InputFieldChangeData
              label={"Geburtsdatum:"}
              name="birthDay"
              value={mockupData.birthDay}
              placeholder={mockupData.birthDay}
            />
            <InputFieldChangeData
              label={"Benutzername:"}
              name="userName"
              value={mockupData.userName}
              placeholder={mockupData.userName}
            />
            <InputFieldChangeData
              label={"Dein Moodster heißt:"}
              name="moodstername"
              value={mockupData.moodstername}
              placeholder={mockupData.moodstername}
            />
            <button type="submit">Speichern...</button>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default About;
