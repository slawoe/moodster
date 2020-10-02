import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InfoElementWrapper from "../../components/InfoElementWrapper";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../../api/user";
import Loading from "../LoadingPage";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function showUser() {
      const loadedUser = await fetchUserProfile(
        sessionStorage.getItem("userID")
      );
      setUser(loadedUser);
      setLoading(true);
    }
    showUser();
  }, []);

  if (!loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Dein Profil</h1>
            <InfoElementWrapper>
              <span>Vorname:</span>
              <span>{user.firstName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Nachname:</span>
              <span>{user.lastName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Spitzname:</span>
              <span>{user.nickName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Geburtsdatum:</span>
              <span>{user.birthDay}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Benutzername:</span>
              <span>{user.userName}</span>
            </InfoElementWrapper>
            <InfoElementWrapper>
              <span>Moodster:</span>
              <span>{user.moodsterName}</span>
            </InfoElementWrapper>
            <Link to="/main/profile/change">Profil bearbeiten...</Link>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Profile;
