import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InfoElementWrapper from "./InfoElementWrapper";
import { Link } from "react-router-dom";

const DoctorsListWrapper = styled.div`
  background: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  padding: 0.4rem 0.7rem;
  display: flex;
  flex-direction: column;
  & div:last-child,
  & div:last-child > a {
    align-self: flex-end;
    padding: 1rem 0;
    color: var(--button-proceed-color);
  }
`;

function DoctorsListElement({
  firstName,
  lastName,
  street,
  zipAndLocation,
  phone,
  mail,
  officeHours,
  id,
}) {
  return (
    <DoctorsListWrapper>
      <InfoElementWrapper>
        <span>Vorname:</span>
        <span>{firstName}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Nachname:</span>
        <span>{lastName}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Straße:</span>
        <span>{street}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>PLZ und Ort:</span>
        <span>{zipAndLocation}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Tel-Nr.:</span>
        <span>{phone}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Mail:</span>
        <span>{mail}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Sprechzeiten:</span>
        <span>{officeHours}</span>
      </InfoElementWrapper>
      <div>
        <Link to={`/main/doctors/change/${id}`}>
          Arzt bearbeiten oder löschen...
        </Link>
      </div>
    </DoctorsListWrapper>
  );
}

export default DoctorsListElement;

DoctorsListElement.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  street: PropTypes.string,
  zipAndLocation: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
  officeHours: PropTypes.string,
  id: PropTypes.string,
};
