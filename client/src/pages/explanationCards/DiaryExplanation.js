import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function DiaryExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Tagebuch"
            p="Hier findest Du das Tagebuch.
            Jeder Eintrag, den Du machst, wird hier abgespeichert und ist später zum Lesen für dich verfügbar. Im Tagebuch kannst Du alle deine Einträge nach Datum durchsuchen und wenn Du auf Details klickst, dann siehst Du deinen kompletten Tagebucheintrag. Ich bin schon gespannt darauf, was Du mir so zu erzählen hast."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default DiaryExplanation;
