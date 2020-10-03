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
              Ab Version 2.0 werden die Einträge verschlüsselt werden und
              komplett vor Zugriff geschützt sein, doch auch jetzt schon sieht
              nur der Anwender selbst und auch nur so lange er eingeloggt ist,
              seine Daten.
            </p>

            <p>
              Moodster ist eine nicht kommerzielle App, die im Rahmen einer
              Abschlussarbeit für das Web Developer Bootcamp bei neue fische
              entstanden ist.
            </p>
            <p>Die Rechte an der Idee liegen bei: Slawomir Ernst</p>
            <p>Version 1.0 | Stand: Oktober 2020</p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default About;
