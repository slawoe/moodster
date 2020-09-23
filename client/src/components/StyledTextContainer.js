import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledTextContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 1.4em;
    padding: 0.6em;
    margin: 0px;
  }
  & > h2 {
    font-size: 1em;
    padding: 0.5em 1em 0;
    margin: 0px;
  }
  & > p,
  & > div > p {
    padding: 0.5em 1em;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  & > p > a {
    color: var(--button-proceed-color);
  }
  & > p > img {
    padding: 3em;
  }
  & > div {
    padding: 0.5em 1em;
  }
  & > a {
    padding: 0.5em 1em;
    color: var(--button-proceed-color);
    align-self: flex-end;
    border: none;
    background: transparent;
  }
`;

export default StyledTextContainer;

StyledTextContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
