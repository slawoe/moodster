import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "./About";
import Links from "./Links";
import Help from "../pages/Help";
import CallButtonExplanation from "../pages/explanationCards/CallButtonExplanation";
import MoodsterExplanation from "../pages/explanationCards/MoodsterExplanation";
import MenueExplanation from "../pages/explanationCards/MenueExplanation";
import DiaryExplanation from "../pages/explanationCards/DiaryExplanation";
import QuestionnaireExplanation from "../pages/explanationCards/QuestionnaireExplanation";
import MedicsExplanation from "../pages/explanationCards/MedicsExplanation";
import AnalysisExplanation from "./explanationCards/AnalysisExplanation";
import Welcome from "../pages/Welcome";
import DiaryForm from "./questionnaireform/QuestionnaireForm";
import DiaryList from "../pages/DiaryList";

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
          <Route path={`${path}/medics`}></Route>
          <Route path={`${path}/analysis`}></Route>
          <Route path={`${path}/doctors`}></Route>
          <Route path={`${path}/profile`}></Route>
          <Route path={`${path}/links`}>
            <Links />
          </Route>
          <Route exact path={`${path}/help`}>
            <Help />
          </Route>
          <Route path={`${path}/help/callbutton`}>
            <CallButtonExplanation />
          </Route>
          <Route path={`${path}/help/moodster`}>
            <MoodsterExplanation />
          </Route>
          <Route path={`${path}/help/menue`}>
            <MenueExplanation />
          </Route>
          <Route path={`${path}/help/diary`}>
            <DiaryExplanation></DiaryExplanation>
          </Route>
          <Route path={`${path}/help/questionnaire`}>
            <QuestionnaireExplanation />
          </Route>
          <Route path={`${path}/help/medics`}>
            <MedicsExplanation />
          </Route>
          <Route path={`${path}/help/analysis`}>
            <AnalysisExplanation />
          </Route>
          <Route path={`${path}/about`}>
            <About />
          </Route>
          <Route path={`${path}/questionnaire`}>
            <DiaryForm></DiaryForm>
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
