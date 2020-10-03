import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MenueExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Menü"
            p="Oben rechts befindet sich das Menü.
            Hier findest Du alle Punkte, die man in der App ansteuern kann. Klick dich gerne durch, Du kannst nichts kaputtmachen und wenn Du fertig bist, dann kannst Du ganz einfach über die Hilfe wieder hierher finden."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MenueExplanation;
