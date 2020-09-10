import React from "react";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Footer",
  component: Footer,
};

const Template = () => (
  <Router>
    <Footer />
  </Router>
);

export const MainFooter = Template.bind({});
