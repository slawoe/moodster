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
  padding: 0.4em 0.7em;
  display: flex;
  flex-direction: column;
  & div:last-child,
  & div:last-child > a {
    align-self: flex-end;
    padding: 1em 0;
    color: var(--button-proceed-color);
  }
`;

function DoctorsListElement({ name, address, phone, mail, officeHours, id }) {
  return (
    <DoctorsListWrapper>
      <InfoElementWrapper>
        <span>Name:</span>
        <span>{name}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Adresse:</span>
        <span>{address}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Telefonnummer:</span>
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
  name: PropTypes.any.isRequired,
  address: PropTypes.any.isRequired,
  phone: PropTypes.any.isRequired,
  mail: PropTypes.any.isRequired,
  officeHours: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
};
