import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Loupe from "../assets/icons/search.svg";

const SearchbarWrapper = styled.div`
  background: var(--card-background-color);
  grid-area: 2 / 1 / 3 / 4;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: var(--main-elements-shadow);
  & > input {
    background: transparent;
    border: 2px var(--inputfield-attention-color) solid;
    height: 80%;
    width: 55%;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    color: var(--text-color-attention);
  }
  & > img {
    margin: 0.5rem;
  }
`;

function Searchbar({ query, onChange, placeholder }) {
  return (
    <SearchbarWrapper>
      <input
        value={query}
        onChange={(event) => onChange(event.target.value.trim())}
        placeholder={placeholder}
      />
      <img src={Loupe} alt="Lupe" />
    </SearchbarWrapper>
  );
}

export default Searchbar;
Searchbar.propTypes = {
  query: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
  placeholder: PropTypes.string.isRequired,
};
