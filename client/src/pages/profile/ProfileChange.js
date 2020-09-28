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
  const [userName, setUserName] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [moodstername, setMoodstername] = useState(null);
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
      setUserName(loadedUser.userName);
      setMoodstername(loadedUser.moodstername);
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

  function userNameChange(userName) {
    setUserName(userName.target.value);
  }

  function moodsternameChange(moodstername) {
    setMoodstername(moodstername.target.value);
  }

  const updatedUser = {
    firstName,
    lastName,
    nickName,
    birthDay,
    userName,
    moodstername,
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
      childrenheadsection={<></>}
      childrenmainsection={
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
              label={"Nutzername:"}
              name="moodstername"
              placeholder={userName}
              onChange={userNameChange}
            />
            <InputFieldChangeData
              label={"Moodster-Name:"}
              name="moodstername"
              placeholder={moodstername}
              onChange={moodsternameChange}
            />
            <SaveButton
              disabled={
                !firstName ||
                !lastName ||
                !nickName ||
                !birthDay ||
                !userName ||
                !moodstername ||
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
