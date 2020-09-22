import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InfoElementWrapper from "./InfoElementWrapper";

const MedicsListWrapper = styled.div`
  background: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  padding: 0.4em 0.7em;
  display: flex;
  flex-direction: column;
  & div > span:last-child {
    color: var(--text-color-attention);
  }
  & div:last-child,
  & div:last-child > a {
    align-self: flex-end;
    padding: 1em 0;
    color: var(--button-proceed-color);
  }
`;

function MedicsListElement({ name, intakes, id }) {
  return (
    <MedicsListWrapper>
      <InfoElementWrapper>
        <span>Name:</span>
        <span>{name}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Einnahmen:</span>
        <span>{intakes}</span>
      </InfoElementWrapper>
      <div>
        <a href={`/main/medics/${id}`}>Medikament bearbeiten oder löschen...</a>
      </div>
    </MedicsListWrapper>
  );
}

export default MedicsListElement;

MedicsListElement.propTypes = {
  name: PropTypes.any.isRequired,
  intakes: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,
};
