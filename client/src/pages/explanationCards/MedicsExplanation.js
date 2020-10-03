import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MedicsExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Medikamente"
            p="Hier findest Du deine Medikamente. Du kannst sie alle abspeichern, bearbeiten, löschen, nach Namen durchsuchen und natürlich kannst Du auch eintragen, wann Du, welche davon einnehmen musst. Bevor ich es vergesse: In der Menüleiste findest Du auch eine Kategorie für Ärzte, wo Du das Gleiche mit all deinen Ärzten machen kannst."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MedicsExplanation;
