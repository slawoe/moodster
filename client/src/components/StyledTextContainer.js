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
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0;
  }
  & > h2 {
    font-size: 1rem;
    padding: 1rem 1rem 0;
    margin: 0;
  }
  & > p,
  & > div > p {
    padding: 0.5rem 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  & > p > a {
    color: var(--button-proceed-color);
    padding: 0.5rem;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & > p > img {
    padding: 1rem;
  }
  & > div {
    padding: 0.5rem 1rem;
  }
  & > a {
    padding: 0.5rem 1rem;
    color: var(--button-proceed-color);
    align-self: flex-end;
  }
`;

export default StyledTextContainer;

StyledTextContainer.propTypes = {
  children: PropTypes.element.isRequired,
};
