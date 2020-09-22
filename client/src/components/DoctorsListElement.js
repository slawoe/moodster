import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DiaryListWrapper = styled.div`
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

const DoctorsInfoElement = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;
`;

function DoctorsListElement({ name, address, phone, mail, officeHours, id }) {
  return (
    <DiaryListWrapper>
      <DoctorsInfoElement>
        <span>Name:</span>
        <span>{name}</span>
      </DoctorsInfoElement>
      <DoctorsInfoElement>
        <span>Adresse:</span>
        <span>{address}</span>
      </DoctorsInfoElement>
      <DoctorsInfoElement>
        <span>Telefonnummer:</span>
        <span>{phone}</span>
      </DoctorsInfoElement>
      <DoctorsInfoElement>
        <span>Mail:</span>
        <span>{mail}</span>
      </DoctorsInfoElement>
      <DoctorsInfoElement>
        <span>Sprechzeiten:</span>
        <span>{officeHours}</span>
      </DoctorsInfoElement>
      <div>
        <a href={`/main/doctors/${id}`}>Arzt bearbeiten oder löschen...</a>
      </div>
    </DiaryListWrapper>
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
