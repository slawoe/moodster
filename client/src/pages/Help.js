import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import HelpCard from "./explanationCards/HelpCard";
import CallButtonExplanation from "./explanationCards/CallButtonExplanation";
import MoodsterExplanation from "./explanationCards/MoodsterExplanation";
import MenueExplanation from "./explanationCards/MenueExplanation";
import DiaryExplanation from "./explanationCards/DiaryExplanation";
import QuestionnaireExplanation from "./explanationCards/QuestionnaireExplanation";
import MedicsExplanation from "./explanationCards/MedicsExplanation";
import AnalysisExplanation from "./explanationCards/AnalysisExplanation";

function Help() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/callbutton`}>
          <CallButtonExplanation />
        </Route>
        <Route path={`${path}/moodster`}>
          <MoodsterExplanation />
        </Route>
        <Route path={`${path}/menue`}>
          <MenueExplanation />
        </Route>
        <Route path={`${path}/diary`}>
          <DiaryExplanation></DiaryExplanation>
        </Route>
        <Route path={`${path}/questionnaire`}>
          <QuestionnaireExplanation />
        </Route>
        <Route path={`${path}/medics`}>
          <MedicsExplanation />
        </Route>
        <Route path={`${path}/analysis`}>
          <AnalysisExplanation />
        </Route>
        <Route exact path={`${path}/`}>
          <HelpCard />
        </Route>
      </Switch>
    </>
  );
}

export default Help;
