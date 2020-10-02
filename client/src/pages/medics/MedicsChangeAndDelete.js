import React, { useEffect, useState } from "react";
import StyledTextContainer from "../../components/StyledTextContainer";
import BasicPageLayout from "../../components/BasicPageLayout";
import InputFieldChangeData from "../../components/InputFieldChangeData";
import DeleteAndSaveButtonWrapper from "../../components/DeleteAndSaveButtonWrapper";
import DeleteButton from "../../components/DeleteButton";
import SaveButton from "../../components/SaveButton";
import { fetchMedic, updateMedic, deleteMedic } from "../../api/medics";
import LoadingPage from "../LoadingPage";
import { useHistory, useParams } from "react-router-dom";

function MedicsChange() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [intakeMorning, setIntakeMorning] = useState("");
  const [intakeMidday, setIntakeMidday] = useState("");
  const [intakeEvening, setIntakeEvening] = useState("");
  const [intakeNight, setIntakeNight] = useState("");
  const [loadingMedic, setLoadingMedic] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function showMedic() {
      const newMedic = await fetchMedic(id);
      setName(newMedic.name);
      setIntakeMorning(newMedic.intakeMorning);
      setIntakeMidday(newMedic.intakeMidday);
      setIntakeEvening(newMedic.intakeEvening);
      setIntakeNight(newMedic.intakeNight);
      setLoadingMedic(true);
    }
    showMedic();
  }, [id]);

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

  const updatedMedic = {
    name,
    intakeMorning,
    intakeMidday,
    intakeEvening,
    intakeNight,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoadingUpdate(true);
    setError(false);
    try {
      await updateMedic(id, updatedMedic);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoadingUpdate(false);
      history.push("/main/medics");
    }
  }

  if (!loadingMedic) {
    return <LoadingPage />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <StyledTextContainer>
          <h1>Dein Medikament bearbeiten</h1>
          <InputFieldChangeData
            label="Name:"
            name="name"
            placeholder={name}
            onChange={nameChange}
          />
          <InputFieldChangeData
            label="Morgens:"
            name="intakeMorning"
            placeholder={intakeMorning}
            onChange={intakeMorningChange}
          />
          <InputFieldChangeData
            label="Mittags:"
            name="intakeMidday"
            placeholder={intakeMidday}
            onChange={intakeMiddayChange}
          />
          <InputFieldChangeData
            label="Abends:"
            name="intakeEvening"
            placeholder={intakeEvening}
            onChange={intakeEveningChange}
          />
          <InputFieldChangeData
            label="Nachts:"
            name="intakeNight"
            placeholder={intakeNight}
            onChange={intakeNightChange}
          />
          <DeleteAndSaveButtonWrapper>
            <DeleteButton
              type="submit"
              onClick={async () => {
                await deleteMedic(id);
                history.push("/main/medics");
              }}
            />
            {error && <p>Something bad happened. Please try again.</p>}
            <SaveButton
              disabled={
                !name ||
                !intakeMorning ||
                !intakeMidday ||
                !intakeEvening ||
                !intakeNight ||
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

export default MedicsChange;
