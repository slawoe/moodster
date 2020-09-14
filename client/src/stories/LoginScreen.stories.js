import React from "react";
import LoginPage from "../pages/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "LoginScreen",
  component: LoginPage,
};

const Template = () => (
  <Router>
    <LoginPage></LoginPage>
  </Router>
);

export const Login = Template.bind({});
