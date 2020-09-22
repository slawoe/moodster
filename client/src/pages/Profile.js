import React from "react";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";
import InfoElementWrapper from "../components/InfoElementWrapper";
import { Link } from "react-router-dom";

const mockupData = {
  firstName: "Max",
  lastName: "Mustermann",
  nickName: "Maxi",
  birthDay: "01.01.2010",
  userName: "maxi.muster",
  moodstername: "Moody",
};

function Profile() {
  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <StyledTextContainer>
            <h1>Dein Profil</h1>
            <InfoElementWrapper>
              <span>Vorname:</span>
              <span>{mockupData.firstName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Nachname:</span>
              <span>{mockupData.lastName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Spitzname:</span>
              <span>{mockupData.nickName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Geburtsdatum:</span>
              <span>{mockupData.birthDay}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Benutzername:</span>
              <span>{mockupData.userName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Dein Moodster heißt:</span>
              <span>{mockupData.moodstername}</span>
            </InfoElementWrapper>
            <Link href="#">Profil bearbeiten...</Link>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Profile;
