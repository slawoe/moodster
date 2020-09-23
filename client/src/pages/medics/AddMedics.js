import React, { useState } from "react";
import PropTypes from "prop-types";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputField from "../../components/InputField";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import SaveButton from "../../components/SaveButton";

function AddMedics() {
  const [medic, setMedic] = useState("");
  const [intakes, setIntakes] = useState("");

  function medicChange(medic) {
    setMedic(medic.target.value);
  }
  function intakesChange(intakes) {
    setIntakes(intakes.target.value);
  }

  return (
    <BasicPageLayout
      childrenheadsection={<></>}
      childrenmainsection={
        <>
          <h2>Medikament hinzufügen</h2>
          <InputField
            label="Medikamenten-Name:"
            name="medic"
            value={medic}
            placeholder="Medikamenten-Name"
            onChange={medicChange}
          />
          <InputFieldTextArea
            label="Einnahmezeiten:"
            name="intakes"
            value={intakes}
            placeholder="10mg 10:00 Uhr"
            onChange={intakesChange}
          />
          <SaveButton type="submit">Speichern...</SaveButton>
        </>
      }
    />
  );
}

export default AddMedics;

AddMedics.propTypes = {
  children: PropTypes.element.isRequired,
};
