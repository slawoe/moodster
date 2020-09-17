import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationForm from "./pages/registrationform/RegistrationForm";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/main">
            <Home />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
