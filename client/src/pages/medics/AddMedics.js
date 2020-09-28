import React, { useState } from "react";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import SaveButton from "../../components/SaveButton";
import { postNewMedic } from "../../api/medics";
import { useHistory } from "react-router-dom";

function AddMedics() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [intakeMorning, setIntakeMorning] = useState("");
  const [intakeMidday, setIntakeMidday] = useState("");
  const [intakeEvening, setIntakeEvening] = useState("");
  const [intakeNight, setIntakeNight] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userID = sessionStorage.getItem("userID");

  function nameChange(name) {
    setName(name.target.value);
  }
  function intakeMorningChange(intakeMorning) {
    setIntakeMorning(intakeMorning.target.value);
  }
  function intakeMiddayChange(intakeMidday) {
    setIntakeMidday(intakeMidday.target.value);
  }
  function intakeEveningChange(intakeEvening) {
    setIntakeEvening(intakeEvening.target.value);
  }
  function intakeNightChange(intakeNight) {
    setIntakeNight(intakeNight.target.value);
  }

  const newMedic = {
    name,
    intakeMorning,
    intakeMidday,
    intakeEvening,
    intakeNight,
    userID,
  };

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
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <h2>Medikament hinzufügen</h2>
          <InputField
            label="Medikamenten-Name:"
            name="name"
            value={name}
            placeholder="Medikamenten-Name"
            onChange={nameChange}
          />
          <InputField
            label="Einnahme morgens:"
            name="intakeMorning"
            value={intakeMorning}
            placeholder="10mg 08:00 Uhr"
            onChange={intakeMorningChange}
          />
          <InputField
            label="Einnahme mittags:"
            name="intakeMidday"
            value={intakeMidday}
            placeholder="5mg 12:00 Uhr"
            onChange={intakeMiddayChange}
          />
          <InputField
            label="Einnahme abends:"
            name="intakeEvening"
            value={intakeEvening}
            placeholder="10mg 18:00 Uhr"
            onChange={intakeEveningChange}
          />
          <InputField
            label="Einnahme nachts:"
            name="intakeNight"
            value={intakeNight}
            placeholder="5mg 22:00 Uhr"
            onChange={intakeNightChange}
          />

          <SaveButton
            type="submit"
            disabled={
              !name ||
              !intakeMorning ||
              !intakeMidday ||
              !intakeEvening ||
              !intakeNight | loading
            }
            onClick={handleSubmit}
          />
          {error && <p>Something bad happened. Please try again.</p>}
        </>
      }
    />
  );
}

export default AddMedics;
