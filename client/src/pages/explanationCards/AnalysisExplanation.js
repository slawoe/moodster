import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function DoctorsExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Analyse"
            p="Unten rechts findest Du den Knopf für die Analyse. Die wird aber erst nach 14 Tagebucheinträgen freigeschaltet. Das heißt, Du musst dich ein bisschen gedulden und fleißig schreiben. Wenn das passiert ist, kannst Du hier die Stimmung deiner letzten 14 Einträge nachverfolgen.
            Auf einer Skala von 1 bis 10 wird deine Stimmung der letzten Einträge angezeigt. Die Reihenfolge 1-14 zeigt dir an, wie alt der Eintrag ist. 1 ist dein neuester Eintrag, 14 dein ältester. Außerdem zeige ich dir den Durchschnitt deiner Stimmung an und gebe dir, wenn nötig auch passende Ratschläge."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default DoctorsExplanation;
