import React from "react";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "ErrorScreen",
  component: ErrorPage,
};

const Template = () => (
  <Router>
    <ErrorPage />
  </Router>
);

export const Error = Template.bind({});
