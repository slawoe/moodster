import React from "react";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";

function About() {
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Über Moodster</h1>
            <p>
              Moodster ist eine Applikation für Kinder, die sich in Therapie
              befinden. Sie soll Kindern und Eltern durch diese schwierige Phase
              begleiten und gleichzeitig dabei helfen, sich gegenseitig besser
              verstehen und deuten zu können.
            </p>
            <p>
              Die Tagebucheinträge sind dabei vollständig vor Zugriff durch
              Dritte geschützt und stehen nur dem Nutzer selbst zur Verfügung
            </p>
            <p>
              Moodster ist eine nicht kommerzielle App, die im Rahmen einer
              Abschlussarbeit für das Web Developer Bootcamp bei neue fische
              entstanden ist.
            </p>
            <p>Die Rechte liegen bei: Slawomir Ernst</p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default About;
