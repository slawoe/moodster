import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "MainScreen",
  component: Main,
  Header,
  Footer,
};

const Template = () => (
  <Router>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </Router>
);

export const MainScreen = Template.bind({});
