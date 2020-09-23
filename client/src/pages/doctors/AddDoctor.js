import React, { useState } from "react";
import PropTypes from "prop-types";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import SaveButton from "../../components/SaveButton";

function AddDoctor() {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [officeHours, setOfficeHours] = useState("");

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
        <>
          <h2>Arzt hinzufügen</h2>
          <InputField
            label="Name:"
            name="name"
            value={name}
            placeholder="Heinz Müller"
            onChange={nameChange}
          />
          <InputFieldTextArea
            label="Adresse:"
            name="address"
            value={address}
            placeholder="Lindenstraße 10, 12345 Berlin"
            onChange={addressChange}
          />
          <InputField
            label="Telefon:"
            name="phone"
            value={phone}
            placeholder="0123456789"
            onChange={phoneChange}
          />
          <InputField
            label="Mail:"
            name="mail"
            value={mail}
            placeholder="test@test.de"
            onChange={mailChange}
          />
          <InputFieldTextArea
            label="Sprechzeiten:"
            name="officeHours"
            value={officeHours}
            placeholder="Mo-Fr 10-18 Uhr"
            onChange={officeHoursChange}
          />
          <SaveButton type="submit">Speichern...</SaveButton>
        </>
      }
    />
  );
}

export default AddDoctor;

AddDoctor.propTypes = {
  children: PropTypes.element.isRequired,
};
