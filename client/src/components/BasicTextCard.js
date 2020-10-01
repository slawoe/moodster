import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Moodster from "../assets/images/moodster.svg";

const BasicTextDiv = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: grid;
  height: 85%;
  grid-template-columns: 90% 10%;
  grid-template-rows: 60% 40%;
  & > p {
    padding: 1rem 0.7rem;
    margin: 0;
    grid-area: 1/ 1/ 3 /2;
  }
  & > img {
    height: 50%;
    grid-area: 2/ 2/ 3 /3;
  }
`;

function BasicTextCard({ children }) {
  return (
    <BasicTextDiv>
      {children}
      <img src={Moodster} alt="moodster" />
    </BasicTextDiv>
  );
}

export default BasicTextCard;

BasicTextCard.propTypes = {
  children: PropTypes.element.isRequired,
};
