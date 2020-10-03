import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function QuestionnaireExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Tagebuch-Eintrag"
            p="Jedes Mal, wenn Du einen neuen Tagebucheintrag vornehmen willst, brauchst Du nur den Knopf links unten zu drücken und schon beginne ich mit den Fragen. Du solltest jeden Tag einen Eintrag vornehmen. Wenn Du mir aber öfter schreiben willst, ist das auch ok. Ich höre dir gerne zu und freue mich, wenn Du mir von deinem Tag erzählst."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default QuestionnaireExplanation;
