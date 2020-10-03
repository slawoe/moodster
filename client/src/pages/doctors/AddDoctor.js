import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import SaveButton from "../../components/SaveButton";
import { postNewDoctor } from "../../api/doctors";
import { useHistory } from "react-router-dom";

function AddDoctor() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userID = sessionStorage.getItem("userID");
  const [newDoctor, setNewDoctor] = useState({
    firstName: "",
    lastName: "",
    street: "",
    zipAndLocation: "",
    phone: "",
    mail: "",
    officeHours: "",
    userID,
  });

  function handleChange(event) {
    const value = event.target.value;
    setNewDoctor({ ...newDoctor, [event.target.name]: value });
  }

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
      childrenMainSection={
        <>
          <h2>Arzt hinzufügen</h2>
          <InputField
            label="Vorname:"
            name="firstName"
            value={newDoctor.firstName}
            placeholder="Heinz"
            onChange={handleChange}
          />
          <InputField
            label="Nachname:"
            name="lastName"
            value={newDoctor.lastName}
            placeholder="Müller"
            onChange={handleChange}
          />
          <InputField
            label="Straße:"
            name="street"
            value={newDoctor.street}
            placeholder="Lindenstraße 10"
            onChange={handleChange}
          />
          <InputField
            label="PLZ und Ort:"
            name="zipAndLocation"
            value={newDoctor.zipAndLocation}
            placeholder="12345 Berlin"
            onChange={handleChange}
          />
          <InputField
            label="Telefon:"
            name="phone"
            value={newDoctor.phone}
            placeholder="0123456789"
            onChange={handleChange}
          />
          <InputField
            label="Mail:"
            name="mail"
            value={newDoctor.mail}
            placeholder="test@test.de"
            onChange={handleChange}
          />
          <InputFieldTextArea
            label="Sprechzeiten:"
            name="officeHours"
            value={newDoctor.officeHours}
            placeholder="Mo-Fr 10-18 Uhr"
            onChange={handleChange}
          />
          <SaveButton
            disabled={!newDoctor || loading}
            type="submit"
            onClick={handleSubmit}
          />
          {error && (
            <p>
              Das hat leider nicht funktioniert. Probier es bitte noch einmal.
            </p>
          )}
        </>
      }
    />
  );
}

export default AddDoctor;
