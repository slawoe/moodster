import GlobalStyles from "../src/GlobalStyles";
import React from "react";
export const parameters = { actions: { argTypesRegex: "^on[A-Z].*" } };
const withGlobalStyles = (Story, context) => {
  return (
    <>
      <GlobalStyles /> <Story {...context} />
    </>
  );
};
export const decorators = [withGlobalStyles];
