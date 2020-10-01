import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "./About";
import Links from "./Links";
import Help from "./Help";
import Welcome from "../pages/Welcome";
import DiaryForm from "./questionnaireform/QuestionnaireForm";
import DiaryList from "../pages/DiaryList";
import Doctors from "./Doctors";
import Medics from "./Medics";
import Profile from "./Profile";
import Analysis from "./Analysis";

function Home() {
  const { path } = useRouteMatch();
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route path={`${path}/diary`}>
            <DiaryList />
          </Route>
          <Route path={`${path}/medics`}>
            <Medics />
          </Route>
          <Route path={`${path}/analysis`}>
            <Analysis />
          </Route>
          <Route path={`${path}/doctors`}>
            <Doctors />
          </Route>
          <Route path={`${path}/profile`}>
            <Profile />
          </Route>
          <Route path={`${path}/links`}>
            <Links />
          </Route>
          <Route path={`${path}/help`}>
            <Help />
          </Route>
          <Route path={`${path}/about`}>
            <About />
          </Route>
          <Route path={`${path}/questionnaire`}>
            <DiaryForm />
          </Route>
          <Route exact path={`${path}/`}>
            <Welcome />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
