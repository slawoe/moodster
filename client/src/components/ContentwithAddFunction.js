import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContentWithAddWrapper = styled.div`
  display: grid;
  grid-template-rows: 11% 89%;
  overflow: hidden;
  height: 100%;
`;

const AddButtonWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
`;
const ContentWrapper = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  overflow: auto;
`;

function ContentWithAddFunction({ addcomponent, content }) {
  return (
    <ContentWithAddWrapper>
      <AddButtonWrapper>{addcomponent}</AddButtonWrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </ContentWithAddWrapper>
  );
}

export default ContentWithAddFunction;

ContentWithAddFunction.propTypes = {
  addcomponent: PropTypes.element,
  content: PropTypes.element,
};
