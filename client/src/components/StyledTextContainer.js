import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledTextContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  & > h1 {
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0;
  }
  & > h2 {
    font-size: 1rem;
    padding: 1rem 1rem 0;
    margin: 0;
  }
  & > div {
    padding: 1rem;
  }
  & > p,
  & > div > p {
    padding: 1rem 1rem 0 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  & > p > a {
    color: var(--button-proceed-color);
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 0.5rem;
  }
  & > p > img {
    padding: 1rem;
  }
  & > div {
    padding: 0.25rem 1rem;
  }
  & > a {
    padding: 0.5rem 1rem;
    color: var(--button-proceed-color);
    align-self: flex-end;
  }
  & > p:last-of-type {
    padding: 0.5rem 1rem 1rem;
  }
`;

export default StyledTextContainer;

StyledTextContainer.propTypes = {
  children: PropTypes.element,
};
