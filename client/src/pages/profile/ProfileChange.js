import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import SaveButton from "../../components/SaveButton";
import { useHistory } from "react-router-dom";
import { fetchUserProfile, updateUser } from "../../api/users";
import Loading from "../LoadingPage";

function ProfileChange() {
  const history = useHistory();
  const [updatedUser, setUpdatedUser] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    birthDay: "",
    moodsterName: "",
  });
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function showUser() {
      try {
        const updatedUser = await fetchUserProfile(
          sessionStorage.getItem("userID")
        );
        setUpdatedUser(updatedUser);
        setLoadingUser(false);
      } catch (error) {
        console.log(error);
      }
    }
    showUser();
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setUpdatedUser({ ...updatedUser, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingUpdate(true);
    setError(false);
    try {
      await updateUser(sessionStorage.getItem("userID"), updatedUser);
      sessionStorage.nickName = updatedUser.nickName;
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoadingUpdate(false);
      history.push("/main/profile");
    }
  }

  if (loadingUser) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Dein Profil bearbeiten</h1>
            <InputFieldChangeData
              label={"Vorname:"}
              name="firstName"
              value={updatedUser.firstName}
              onChange={handleChange}
            />
            <InputFieldChangeData
              label={"Nachname:"}
              name="lastName"
              value={updatedUser.lastName}
              onChange={handleChange}
            />
            <InputFieldChangeData
              label={"Spitzname:"}
              name="nickName"
              value={updatedUser.nickName}
              onChange={handleChange}
            />
            <InputFieldChangeData
              label={"Geburtsdatum:"}
              name="birthDay"
              value={updatedUser.birthDay}
              onChange={handleChange}
            />
            <InputFieldChangeData
              label={"Moodster:"}
              name="moodsterName"
              value={updatedUser.moodsterName}
              onChange={handleChange}
            />
            <SaveButton
              disabled={!updatedUser || loadingUpdate}
              type="submit"
              onClick={handleSubmit}
            />
            {error && <p>Something bad happened. Please try again.</p>}
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default ProfileChange;
