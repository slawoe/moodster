import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledTextContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  & > h1 {
    font-size: 1.4em;
    padding: 0.6em;
    margin: 0px;
  }
  & > p {
    padding: 1em;
    margin: 0;
  }
`;

export default StyledTextContainer;

StyledTextContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
