import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MoodsterExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Moodster"
            p="Wenn Du mich in der oberen Leiste anklickst, werde ich dich direkt wieder zur Hauptseite bringen. Probier es doch gleich aus, wenn Du dir alle Funktionen durchgelesen hast."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MoodsterExplanation;
