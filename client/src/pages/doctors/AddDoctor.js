import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import SaveButton from "../../components/SaveButton";
import { postNewDoctor } from "../../api/doctors";
import { useHistory } from "react-router-dom";

function AddDoctor() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [zipAndLocation, setZipAndLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [officeHours, setOfficeHours] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userID = sessionStorage.getItem("userID");

  function firstNameChange(firstName) {
    setFirstName(firstName.target.value);
  }
  function lastNameChange(lastName) {
    setLastName(lastName.target.value);
  }
  function streetChange(street) {
    setStreet(street.target.value);
  }
  function zipAndLocationChange(zipAndLocation) {
    setZipAndLocation(zipAndLocation.target.value);
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

  const newDoctor = {
    firstName,
    lastName,
    street,
    zipAndLocation,
    phone,
    mail,
    officeHours,
    userID,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewDoctor(newDoctor);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/doctors");
    }
  }

  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <h2>Arzt hinzufügen</h2>
          <InputField
            label="Vorname:"
            name="firstName"
            value={firstName}
            placeholder="Heinz"
            onChange={firstNameChange}
          />
          <InputField
            label="Nachname:"
            name="lastName"
            value={lastName}
            placeholder="Müller"
            onChange={lastNameChange}
          />
          <InputField
            label="Straße:"
            name="street"
            value={street}
            placeholder="Lindenstraße 10"
            onChange={streetChange}
          />
          <InputField
            label="PLZ und Ort:"
            name="zipAndLocation"
            value={zipAndLocation}
            placeholder="12345 Berlin"
            onChange={zipAndLocationChange}
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
          <SaveButton
            disabled={
              !firstName ||
              !lastName ||
              !street ||
              !zipAndLocation ||
              !phone ||
              !mail ||
              !officeHours ||
              loading
            }
            type="submit"
            onClick={handleSubmit}
          />
          {error && <p>Something bad happened. Please try again.</p>}
        </>
      }
    />
  );
}

export default AddDoctor;
