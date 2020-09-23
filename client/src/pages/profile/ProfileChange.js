import React, { useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import SaveButton from "../../components/SaveButton";
import { Link } from "react-router-dom";

const mockupData = {
  firstName: "Max",
  lastName: "Mustermann",
  nickName: "Maxi",
  birthDay: "01.01.2010",
  userName: "maxi.muster",
  moodstername: "Moody",
};

function ProfileChange() {
  const [firstName, setFirstName] = useState(mockupData.firstName);
  const [lastName, setLastName] = useState(mockupData.lastName);
  const [nickName, setNickName] = useState(mockupData.nickName);
  const [birthDay, setBirthDay] = useState(mockupData.birthDay);
  const [userName, setUserName] = useState(mockupData.userName);
  const [moodstername, setMoodstername] = useState(mockupData.moodstername);

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
              value={firstName}
              placeholder={firstName}
              onChange={firstNameChange}
            />
            <InputFieldChangeData
              label={"Nachname:"}
              name="lastName"
              value={lastName}
              placeholder={lastName}
              onChange={lastNameChange}
            />
            <InputFieldChangeData
              label={"Spitzname:"}
              name="nickName"
              value={nickName}
              placeholder={nickName}
              onChange={nickNameChange}
            />
            <InputFieldChangeData
              label={"Geburtsdatum:"}
              name="birthDay"
              value={birthDay}
              placeholder={birthDay}
              onChange={birthDayChange}
            />
            <InputFieldChangeData
              label={"Benutzername:"}
              name="userName"
              value={userName}
              placeholder={userName}
              onChange={userNameChange}
            />
            <InputFieldChangeData
              label={"Moodster-Name:"}
              name="moodstername"
              value={moodstername}
              placeholder={moodstername}
              onChange={moodsternameChange}
            />
            <Link to="/main/profile">
              <SaveButton
                onClick={console.log("Click")}
                description={"Speichern..."}
              />
            </Link>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default ProfileChange;
