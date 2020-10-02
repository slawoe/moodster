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
  & > textarea {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4rem 0.7rem;
    font-family: "Silom";
    color: var(--inputfield-text-color);
    align-self: flex-end;
    width: 70%;
    height: 15rem;
    resize: none;
    outline: none;
  }
`;

function InputFieldTextArea({ label, type = "text", ...otherProps }) {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <textarea type={type} {...otherProps} />
    </InputFieldWrapper>
  );
}

export default InputFieldTextArea;

InputFieldTextArea.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
