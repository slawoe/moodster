import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
function App() {
  const { path } = useRouteMatch();
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path={`${path}/diary`}></Route>
          <Route exact path={`${path}/questionnaire`}></Route>
          <Route exact path={`${path}/medics`}></Route>
          <Route exact path={`${path}/analysis`}></Route>
          <Route exact path={`${path}/doctors`}></Route>
          <Route exact path={`${path}/profile`}></Route>
          <Route exact path={`${path}/links`}></Route>
          <Route exact path={`${path}/help`}></Route>
          <Route exact path={`${path}/about`}></Route>
          <Route exact path={`${path}/welcome`}></Route>
          <Route exact path={`${path}/onboarding`}></Route>
          <Route exact path={`${path}/`}></Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
