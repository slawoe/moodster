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
  const [updatedDoctor, setUpdatedDoctor] = useState({
    firstName: "",
    lastName: "",
    street: "",
    zipAndLocation: "",
    phone: "",
    mail: "",
    officeHours: "",
  });
  const [loadingDoctor, setLoadingDoctor] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function showDoctor() {
      try {
        const updatedDoctor = await fetchDoctor(id);
        setUpdatedDoctor(updatedDoctor);
        setLoadingDoctor(false);
      } catch (error) {
        console.log(error);
      }
    }
    showDoctor();
  }, [id]);

  function handleChange(event) {
    const value = event.target.value;
    setUpdatedDoctor({ ...updatedDoctor, [event.target.name]: value });
  }

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

  if (loadingDoctor) {
    return <LoadingPage />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <StyledTextContainer>
          <h1>Deinen Arzt bearbeiten</h1>
          <InputFieldChangeData
            label="Vorname:"
            name="firstName"
            value={updatedDoctor.firstName}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Nachname:"
            name="lastName"
            value={updatedDoctor.lastName}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Straße:"
            name="street"
            value={updatedDoctor.street}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="PLZ und Ort:"
            name="zipAndLocation"
            value={updatedDoctor.zipAndLocation}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Telefon:"
            name="phone"
            value={updatedDoctor.phone}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Mail:"
            name="mail"
            value={updatedDoctor.mail}
            onChange={handleChange}
          />
          <InputFieldTextAraChangeData
            label="Sprechzeiten:"
            name="officeHours"
            value={updatedDoctor.officeHours}
            onChange={handleChange}
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
              disabled={!updatedDoctor || loadingUpdate}
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
