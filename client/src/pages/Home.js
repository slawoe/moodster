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
          <Route exact path={`${path}/links`} component={Links} />
          <Route exact path={`${path}/help`} component={Help} />
          <Route
            exact
            path={`${path}/help/callbutton`}
            component={CallButtonExplanation}
          />
          <Route
            exact
            path={`${path}/help/moodster`}
            component={MoodsterExplanation}
          />
          <Route
            exact
            path={`${path}/help/menue`}
            component={MenueExplanation}
          />
          <Route
            exact
            path={`${path}/help/diary`}
            component={DiaryExplanation}
          />
          <Route
            exact
            path={`${path}/help/questionnaire`}
            component={QuestionnaireExplanation}
          />
          <Route
            exact
            path={`${path}/help/medics`}
            component={MedicsExplanation}
          />
          <Route
            exact
            path={`${path}/help/analysis`}
            component={AnalysisExplanation}
          />
          <Route exact path={`${path}/about`} component={About} />
          <Route exact path={`${path}/`} component={Welcome} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
}

export default App;
