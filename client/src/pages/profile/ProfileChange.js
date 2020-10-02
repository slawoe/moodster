import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import SaveButton from "../../components/SaveButton";
import { useHistory } from "react-router-dom";
import { fetchUserProfile, updateUser } from "../../api/user";
import Loading from "../LoadingPage";

function ProfileChange() {
  const history = useHistory();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [nickName, setNickName] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [moodsterName, setmoodsterName] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function showUser() {
      const loadedUser = await fetchUserProfile(
        sessionStorage.getItem("userID")
      );
      setFirstName(loadedUser.firstName);
      setLastName(loadedUser.lastName);
      setNickName(loadedUser.nickName);
      setBirthDay(loadedUser.birthDay);
      setmoodsterName(loadedUser.moodsterName);
      setLoadingUser(true);
    }
    showUser();
  }, []);

  function firstNameChange(firstName) {
    setFirstName(firstName.target.value);
  }
  function lastNameChange(lastName) {
    setLastName(lastName.target.value);
  }
  function nickNameChange(nickName) {
    setNickName(nickName.target.value);
  }
  function birthDayChange(birthDay) {
    setBirthDay(birthDay.target.value);
  }

  function moodsterNameChange(moodsterName) {
    setmoodsterName(moodsterName.target.value);
  }

  const updatedUser = {
    firstName,
    lastName,
    nickName,
    birthDay,
    moodsterName,
  };

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

  if (!loadingUser) {
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
              placeholder={firstName}
              onChange={firstNameChange}
            />
            <InputFieldChangeData
              label={"Nachname:"}
              name="lastName"
              placeholder={lastName}
              onChange={lastNameChange}
            />
            <InputFieldChangeData
              label={"Spitzname:"}
              name="nickName"
              placeholder={nickName}
              onChange={nickNameChange}
            />
            <InputFieldChangeData
              label={"Geburtsdatum:"}
              name="birthDay"
              placeholder={birthDay}
              onChange={birthDayChange}
            />
            <InputFieldChangeData
              label={"Moodster:"}
              name="moodsterName"
              placeholder={moodsterName}
              onChange={moodsterNameChange}
            />
            <SaveButton
              disabled={
                !firstName ||
                !lastName ||
                !nickName ||
                !birthDay ||
                !moodsterName ||
                loadingUpdate
              }
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
