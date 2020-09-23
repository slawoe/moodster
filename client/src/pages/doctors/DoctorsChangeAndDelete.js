import React, { useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import InputFieldTextAraChangeData from "../../components/InputFieldTextAreaChangeData";
import DeleteAndSaveButtonWrapper from "../../components/DeleteAndSaveButtonWrapper";
import DeleteButton from "../../components/DeleteButton";
import SaveButton from "../../components/SaveButton";
import { Link } from "react-router-dom";

const mockupData = {
  name: "Heinz Müller",
  address: "Lindenstraße 10, 12345 Berlin",
  phone: "0123456789",
  mail: "test@test.de",
  officeHours: "Mo-Fr 10-18 Uhr",
};

function DoctorsChange() {
  const [name, setName] = useState(mockupData.name);
  const [address, setAdress] = useState(mockupData.address);
  const [phone, setPhone] = useState(mockupData.phone);
  const [mail, setMail] = useState(mockupData.mail);
  const [officeHours, setOfficeHours] = useState(mockupData.officeHours);

  function nameChange(name) {
    setName(name.target.value);
  }
  function addressChange(adress) {
    setAdress(adress.target.value);
  }
  function phoneChange(phone) {
    setPhone(phone.target.value);
  }
  function mailChange(mail) {
    setMail(mail.target.value);
  }
  function officeHoursChange(officeHours) {
    setOfficeHours(officeHours.target.value);
  }

  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <StyledTextContainer>
          <h1>Deinen Arzt bearbeiten</h1>
          <InputFieldChangeData
            label="Name:"
            name="name"
            value={name}
            placeholder="Heinz Müller"
            onChange={nameChange}
          />
          <InputFieldTextAraChangeData
            label="Adresse:"
            name="address"
            value={address}
            placeholder="Lindenstraße 10, 12345 Berlin"
            onChange={addressChange}
          />
          <InputFieldChangeData
            label="Telefon:"
            name="phone"
            value={phone}
            placeholder="0123456789"
            onChange={phoneChange}
          />
          <InputFieldChangeData
            label="Mail:"
            name="mail"
            value={mail}
            placeholder="test@test.de"
            onChange={mailChange}
          />
          <InputFieldTextAraChangeData
            label="Sprechzeiten:"
            name="officeHours"
            value={officeHours}
            placeholder="Mo-Fr 10-18 Uhr"
            onChange={officeHoursChange}
          />

          <DeleteAndSaveButtonWrapper>
            <Link to="/main/doctors">
              <DeleteButton
                onClick={() => {
                  console.log("Hallo");
                }}
                description={"Löschen"}
              />
            </Link>
            <Link to="/main/doctors">
              <SaveButton
                onClick={() => {
                  console.log("Welt");
                }}
                description={"Speichern..."}
              />
            </Link>
          </DeleteAndSaveButtonWrapper>
        </StyledTextContainer>
      }
    />
  );
}

export default DoctorsChange;
