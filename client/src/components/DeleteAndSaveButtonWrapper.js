import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DeleteAndSaveButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default DeleteAndSaveButtonWrapper;

DeleteAndSaveButtonWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
