import React from "react";
import LoadingPage from "../pages/LoadingPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "LaodingScreen",
  component: LoadingPage,
};

const Template = () => (
  <Router>
    <LoadingPage />
  </Router>
);

export const Loading = Template.bind({});
