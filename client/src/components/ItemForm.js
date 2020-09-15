import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ItemForms = styled.form`
  display: flex;
  flex-direction: column;
  & > label {
    background-color: var(--card-background-color);
    border: none;
    border-radius: 5px;
    padding: 0.4em 0.7em;
    margin: 0.4em 0;
    width: 70%;
    box-shadow: var(--main-elements-shadow);
  }
  & > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4em 0.7em;
    font-family: "Silom";
    color: var(--inputfield-text-color);
    align-self: flex-end;
  }
`;

function ItemForm({ label, children, type = "text", ...otherProps }) {
  return (
    <ItemForms>
      <label>{label}</label>
      <input type={type} {...otherProps} />
    </ItemForms>
  );
}

export default ItemForm;

ItemForm.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};
