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
  name: "Resperidon",
  intakes: "5mg 08:00 Uhr, 10mg 12:00 Uhr, 5 mg 18:00 Uhr",
};

function MedicsChange() {
  const [medic, setMedic] = useState(mockupData.name);
  const [intakes, setIntakes] = useState(mockupData.intakes);

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
          <StyledTextContainer>
            <h1>Dein Medikament bearbeiten</h1>
            <InputFieldChangeData
              label="Name:"
              name="medic"
              value={medic}
              placeholder={medic}
              onChange={medicChange}
            />
            <InputFieldTextAraChangeData
              label="Einnahmen:"
              name="intakes"
              value={intakes}
              placeholder={intakes}
              onChange={intakesChange}
            />
            <DeleteAndSaveButtonWrapper>
              <Link to="/main/medics">
                <DeleteButton
                  onClick={() => {
                    console.log("Hallo");
                  }}
                  description={"Löschen"}
                />
              </Link>
              <Link to="/main/medics">
                <SaveButton
                  onClick={() => {
                    console.log("Welt");
                  }}
                  description={"Speichern..."}
                />
              </Link>
            </DeleteAndSaveButtonWrapper>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default MedicsChange;
