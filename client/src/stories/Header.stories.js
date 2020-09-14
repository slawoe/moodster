import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const Template = () => (
  <Router>
    <Header />
  </Router>
);

export const MainHeader = Template.bind({});
