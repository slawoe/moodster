import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputFieldWrapper = styled.div`
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
  & > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4rem 0.7rem;
    font-family: "Silom";
    color: var(--inputfield-text-color);
    align-self: flex-end;
    width: 70%;
  }
`;

function InputField({ label, type = "text", ...otherProps }) {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <input type={type} {...otherProps} />
    </InputFieldWrapper>
  );
}

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
