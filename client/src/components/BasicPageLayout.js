import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const HeadSectionWrapper = styled.div``;
const MainSectionWrapper = styled.div``;

function BasicPageLayout({ childrenheadsection, childrenmainsection }) {
  return (
    <>
      <HeadSectionWrapper>{childrenheadsection}</HeadSectionWrapper>
      <MainSectionWrapper>{childrenmainsection}</MainSectionWrapper>
    </>
  );
}

export default BasicPageLayout;

BasicPageLayout.propTypes = {
  childrenheadsection: PropTypes.element,
  childrenmainsection: PropTypes.element,
};
