import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function CallButtonExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Notruf"
            p="Wenn Du auf den Knopf oben recht draufdrückst kannst Du dich sofort mit der Telefonseelsorge verbinden lassen. Die Menschen dort haben immer ein offenes Ohr für dich und deine Probleme. Du musst also keine Angst haben, dort anzurufen, wenn es dir gerade schlecht geht und Du niemanden zum Reden hast."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default CallButtonExplanation;
