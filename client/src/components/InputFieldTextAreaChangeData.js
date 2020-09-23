import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > label {
    background: transparent;
    border: none;
    border-radius: 5px;
    padding: 0.4em 0.7em;
  }
  & > textarea {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4em 0.7em;
    font-family: "Silom";
    color: var(--inputfield-text-color);
    align-self: flex-end;
    width: 50%;
    height: 15em;
    resize: none;
    outline: none;
  }
`;

function InputField({ label, type = "text", ...otherProps }) {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <textarea type={type} {...otherProps} />
    </InputFieldWrapper>
  );
}

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
