import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HeadSectionWrapper = styled.div``;
const MainSectionWrapper = styled.div``;

function BasicPageLayout({ childrenHeadSection, childrenMainSection }) {
  return (
    <>
      <HeadSectionWrapper>{childrenHeadSection}</HeadSectionWrapper>
      <MainSectionWrapper>{childrenMainSection}</MainSectionWrapper>
    </>
  );
}

export default BasicPageLayout;

BasicPageLayout.propTypes = {
  childrenHeadSection: PropTypes.element,
  childrenMainSection: PropTypes.element,
};
