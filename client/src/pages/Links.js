import React from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import StyledTextContainer from "../components/StyledTextContainer";
import styled from "@emotion/styled";

const LinksHeadline = styled.h2`
  color: var(--text-color-attention);
`;

function Links() {
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Nützliche Anlaufstellen</h1>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Nummer gegen Kummer</LinksHeadline>
            <p>
              <span>
                Nummer gegen Kummer e.V.
                <br />
                Hofkamp 108
                <br />
                42103 Wuppertal
              </span>
              <span>montags-samstags von 14-20 Uhr</span>
              <a
                href="https://www.nummergegenkummer.de/kinder-und-jugendtelefon.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:116111">Kindertelefon</a>
              <a href="tel:08001110550">Elterntelefon</a>
              <a href="mailto:info@nummergegenkummer.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Psychenet</LinksHeadline>
            <p>
              <span>
                Universitätsklinikum Hamburg-Eppendorf (UKE)
                <br />
                Martinistraße 52
                <br />
                20246 Hamburg
              </span>
              <a
                href="https://www.nummergegenkummer.de/kinder-und-jugendtelefon.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+494074100">Telefon</a>
              <a href="mailto:info@uke.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Neurologen und Psychiater im Netz</LinksHeadline>
            <p>
              <span>
                Monks - Ärzte im Netz GmbH
                <br />
                Tegernseer Landstraße 138
                <br />
                81539 München
              </span>
              <a
                href="https://www.neurologen-und-psychiater-im-netz.org/kinder-jugend-psychiatrie/uebersicht/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+498964248212">Telefon</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Telefonseelsorge</LinksHeadline>
            <p>
              <a
                href="https://www.telefonseelsorge.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:08001110111">Telefon</a>
              <a
                href="https://www.telefonseelsorge.de/vor-ort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vor-Ort-Beratung
              </a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Kassenärztliche Bundesvereinigung</LinksHeadline>
            <p>
              <span>
                Kassenärztliche Bundesvereinigung KdöR
                <br />
                Herbert-Lewin-Platz 2, 10623 Berlin
                <br />
                Postfach 12 02 64, 10592 Berlin
              </span>
              <a
                href="https://www.kbv.de/html/arztsuche.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:116117">Telefonischer Patientenservice</a>
              <a href="mailto:info@kbv.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Weisse Liste</LinksHeadline>
            <p>
              <span>
                Weisse Liste gemeinnützige GmbH
                <br />
                Sitz der Gesellschaft:
                <br />
                Carl-Bertelsmann-Straße 256
                <br />
                33311 Gütersloh
              </span>
              <a
                href="https://www.weisse-liste.de/de/arzt/arztsuche/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+4930275788300">Telefon</a>
              <a
                href="https://www.weisse-liste.de/de/informationen/kontakt-allgemein/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kontaktformular
              </a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Familienportal des Bundesministeriums</LinksHeadline>
            <p>
              <span>
                Bundesministerium für Familie, Senioren, Frauen und Jugend
                <br />
                Glinkastraße 24
                <br />
                10117 Berlin
              </span>
              <a
                href="https://familienportal.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:03020179130">Service-Telefon</a>
              <a
                href="https://familienportal.de/familienportal/meta/kontakt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kontaktformular
              </a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>
              Bundeskonferenz für Erziehungsberatung
            </LinksHeadline>
            <p>
              <span>
                Bundeskonferenz für Erziehungsberatung e.V.
                <br />
                Herrnstraße 53
                <br />
                D-90763 Fürth
              </span>
              <a
                href="https://www.bke.de/virtual/ratsuchende/beratungsstellen.html?SID=114-7D0-704-C17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+49911977140">Telefon</a>
              <a href="mailto:bke@bke.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>DAJEB</LinksHeadline>
            <p>
              <span>
                Deutsche Arbeitsgemeinschaft für Jugend- und Eheberatung e.V.
                (DAJEB)
                <br />
                Neumarkter Str. 84 c <br /> 81673 München
              </span>
              <a
                href="https://www.dajeb.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+49894361091">Telefon</a>
              <a href="mailto:info@dajeb.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Caritas</LinksHeadline>
            <p>
              <span>
                Deutscher Caritasverband e. V. <br />
                Karlstraße 40 <br />
                79104 Freiburg
              </span>
              <a
                href="https://www.caritas.de/hilfeundberatung/onlineberatung/kinder-jugendliche/start"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:+497612000">Telefon</a>
              <a href="mailto:info@caritas.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Bundes Psychotherapeuten Kammer</LinksHeadline>
            <p>
              <span>
                Bundespsychotherapeutenkammer (BPtK)
                <br />
                Arbeitsgemeinschaft der Landespsychotherapeutenkammern
                <br />
                Klosterstraße 64
                <br />
                10179 Berlin
              </span>
              <a
                href="https://www.bptk.de//service/therapeutensuche/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:0302787850">Telefon</a>
              <a href="mailto:info@bptk.de">Mail</a>
            </p>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Psychotherapie Informationsdienst</LinksHeadline>
            <p>
              <span>
                Psychotherapie- Informationsdienst (PID)
                <br />
                Am Köllnischen Park 2<br />
                10179 Berlin
              </span>
              <a
                href="https://www.psychotherapiesuche.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="tel:030209166330">Telefon</a>
              <a href="mailto:pid@psychologenakademie.de">Mail</a>
            </p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Links;
