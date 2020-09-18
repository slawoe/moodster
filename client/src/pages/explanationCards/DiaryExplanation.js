import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";

function DiaryExplanation() {
  let history = useHistory();
  return (
    <ExplanationContent
      h1="Tagebuch"
      p="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      onClick={history.goBack}
    />
  );
}

export default DiaryExplanation;
