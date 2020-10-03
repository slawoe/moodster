import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import SaveButton from "../../components/SaveButton";
import { postNewMedic } from "../../api/medics";
import { useHistory } from "react-router-dom";

function AddMedics() {
  const history = useHistory();
  const userID = sessionStorage.getItem("userID");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newMedic, setNewMedic] = useState({
    name: "",
    intakeMorning: "",
    intakeMidday: "",
    intakeEvening: "",
    intakeNight: "",
    userID,
  });

  function handleChange(event) {
    const value = event.target.value;
    setNewMedic({ ...newMedic, [event.target.name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewMedic(newMedic);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/medics");
    }
  }

  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <h2>Medikament hinzufügen</h2>
          <InputField
            label="Medikamenten-Name:"
            name="name"
            value={newMedic.name}
            placeholder="Medikamenten-Name"
            onChange={handleChange}
          />
          <InputField
            label="Einnahme morgens:"
            name="intakeMorning"
            value={newMedic.intakeMorning}
            placeholder="10mg 08:00 Uhr"
            onChange={handleChange}
          />
          <InputField
            label="Einnahme mittags:"
            name="intakeMidday"
            value={newMedic.intakeMidday}
            placeholder="5mg 12:00 Uhr"
            onChange={handleChange}
          />
          <InputField
            label="Einnahme abends:"
            name="intakeEvening"
            value={newMedic.intakeEvening}
            placeholder="10mg 18:00 Uhr"
            onChange={handleChange}
          />
          <InputField
            label="Einnahme nachts:"
            name="intakeNight"
            value={newMedic.intakeNight}
            placeholder="5mg 22:00 Uhr"
            onChange={handleChange}
          />

          <SaveButton
            type="submit"
            disabled={!newMedic || loading}
            onClick={handleSubmit}
          />
          {error && (
            <p>
              Das hat leider nicht funktioniert. Probier es bitte noch einmal
            </p>
          )}
        </>
      }
    />
  );
}

export default AddMedics;
