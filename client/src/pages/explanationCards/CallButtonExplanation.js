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
            p="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default CallButtonExplanation;
