import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import InputFieldTextAraChangeData from "../../components/InputFieldTextAreaChangeData";
import DeleteAndSaveButtonWrapper from "../../components/DeleteAndSaveButtonWrapper";
import DeleteButton from "../../components/DeleteButton";
import SaveButton from "../../components/SaveButton";
import { useHistory, useParams } from "react-router-dom";
import { fetchDoctor, updateDoctor, deleteDoctor } from "../../api/doctors";
import LoadingPage from "../LoadingPage";

function DoctorsChange() {
  const history = useHistory();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [street, setStreet] = useState(null);
  const [zipAndLocation, setZipAndLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [mail, setMail] = useState(null);
  const [officeHours, setOfficeHours] = useState(null);
  const [loadingDoctor, setLoadingDoctor] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function showDoctor() {
      const newDoctor = await fetchDoctor(id);
      setFirstName(newDoctor.firstName);
      setLastName(newDoctor.lastName);
      setStreet(newDoctor.street);
      setZipAndLocation(newDoctor.zipAndLocation);
      setPhone(newDoctor.phone);
      setMail(newDoctor.mail);
      setOfficeHours(newDoctor.officeHours);
      setLoadingDoctor(true);
    }
    showDoctor();
  }, [id]);

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

  const updatedDoctor = {
    firstName,
    lastName,
    street,
    zipAndLocation,
    phone,
    mail,
    officeHours,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingUpdate(true);
    setError(false);
    try {
      await updateDoctor(id, updatedDoctor);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoadingUpdate(false);
      history.push("/main/doctors");
    }
  }

  if (!loadingDoctor) {
    return <LoadingPage />;
  }
  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <StyledTextContainer>
          <h1>Deinen Arzt bearbeiten</h1>
          <InputFieldChangeData
            label="Vorname:"
            name="firstName"
            placeholder={firstName}
            onChange={firstNameChange}
          />
          <InputFieldChangeData
            label="Nachname:"
            name="lastName"
            placeholder={lastName}
            onChange={lastNameChange}
          />
          <InputFieldChangeData
            label="Straße:"
            name="street"
            placeholder={street}
            onChange={streetChange}
          />
          <InputFieldChangeData
            label="PLZ und Ort:"
            name="zipAndLocation"
            placeholder={zipAndLocation}
            onChange={zipAndLocationChange}
          />
          <InputFieldChangeData
            label="Telefon:"
            name="phone"
            placeholder={phone}
            onChange={phoneChange}
          />
          <InputFieldChangeData
            label="Mail:"
            name="mail"
            placeholder={mail}
            onChange={mailChange}
          />
          <InputFieldTextAraChangeData
            label="Sprechzeiten:"
            name="officeHours"
            placeholder={officeHours}
            onChange={officeHoursChange}
          />
          <DeleteAndSaveButtonWrapper>
            <DeleteButton
              type="submit"
              onClick={async () => {
                await deleteDoctor(id);
                history.push("/main/doctors");
              }}
            />
            {error && <p>Something bad happened. Please try again.</p>}
            <SaveButton
              disabled={
                !firstName ||
                !lastName ||
                !street ||
                !zipAndLocation ||
                !phone ||
                !mail ||
                !officeHours ||
                loadingUpdate
              }
              type="submit"
              onClick={handleSubmit}
            />
            {error && <p>Something bad happened. Please try again.</p>}
          </DeleteAndSaveButtonWrapper>
        </StyledTextContainer>
      }
    />
  );
}

export default DoctorsChange;
