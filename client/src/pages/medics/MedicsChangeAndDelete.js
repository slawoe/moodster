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
  const [updatedMedic, setUpdatedMedic] = useState({
    name: "",
    intakeMorning: "",
    intakeMidday: "",
    intakeEvening: "",
    intakeNight: "",
  });
  const [loadingMedic, setLoadingMedic] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function showMedic() {
      try {
        const updatedMedic = await fetchMedic(id);
        setUpdatedMedic(updatedMedic);
        setLoadingMedic(false);
      } catch (error) {
        console.log(error);
      }
    }
    showMedic();
  }, [id]);

  function handleChange(event) {
    const value = event.target.value;
    setUpdatedMedic({ ...updatedMedic, [event.target.name]: value });
  }

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

  async function handleDelete(event) {
    event.preventDefault();
    try {
      await deleteMedic(id);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      history.push("/main/medics");
    }
  }

  if (loadingMedic) {
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
            value={updatedMedic.name}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Morgens:"
            name="intakeMorning"
            value={updatedMedic.intakeMorning}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Mittags:"
            name="intakeMidday"
            value={updatedMedic.intakeMidday}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Abends:"
            name="intakeEvening"
            value={updatedMedic.intakeEvening}
            onChange={handleChange}
          />
          <InputFieldChangeData
            label="Nachts:"
            name="intakeNight"
            value={updatedMedic.intakeNight}
            onChange={handleChange}
          />
          <DeleteAndSaveButtonWrapper>
            <DeleteButton type="submit" onClick={handleDelete} />
            <SaveButton
              disabled={!updatedMedic || loadingUpdate}
              type="submit"
              onClick={handleSubmit}
            />
            {error && (
              <p>
                Das hat leider nicht funktioniert. Probier es bitte noch einmal
              </p>
            )}
          </DeleteAndSaveButtonWrapper>
        </StyledTextContainer>
      }
    />
  );
}

export default MedicsChange;
