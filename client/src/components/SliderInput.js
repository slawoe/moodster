import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Crying from "../assets/icons/crying.svg";
import Normal from "../assets/icons/meh.svg";
import Happy from "../assets/icons/happy.svg";

const SliderInputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    background-color: var(--card-background-color);
    border: none;
    border-radius: 5px;
    padding: 0.4rem 0.7rem;
    margin: 0.4rem 0;
    width: 70%;
    box-shadow: var(--main-elements-shadow);
  }
  & > div {
    align-self: flex-end;
    width: 100%;
    padding: 1rem 0.7rem;
  }
  & > div > input {
    width: 100%;
    cursor: pointer;
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.7rem;
  }
`;

function SliderInputField({ label, type = "text", ...otherProps }) {
  return (
    <SliderInputFieldWrapper>
      <label>{label}</label>
      <div>
        <div>
          <img src={Crying} alt="Weinender Smiley" />
          <img src={Normal} alt="Emotionsloser Smiley" />
          <img src={Happy} alt="Lachender Smiley" />
        </div>
        <input type={type} {...otherProps} />
      </div>
    </SliderInputFieldWrapper>
  );
}

export default SliderInputField;

SliderInputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
