import React from "react";
import { useForm } from "react-hooks-helper";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Mood from "./Mood";
import DayInOneWord from "./DayInOneWord";
import WhatWasGood from "./WhatWasGood";
import WhatCouldBeBetter from "./WhatCouldBeBetter";
import DiaryEntry from "./DiaryEntry";
import ReviewAndSubmit from "./ReviewAndSubmit";
import SubmitMessage from "./SubmitMessage";

const defaultData = {
  mood: "5",
  dayInOneWord: null,
  whatWasGood: null,
  whatCouldBeBetter: null,
  diaryEntry: null,
};
function QuestionnaireForm() {
  const [formData, setForm] = useForm(defaultData);
  const { path } = useRouteMatch();
  const props = {
    formData,
    setForm,
  };
  return (
    <Switch>
      <Route path={`${path}/submitmessage`}>
        <SubmitMessage {...props} />
      </Route>
      <Route path={`${path}/reviewandsubmit`}>
        <ReviewAndSubmit {...props} />
      </Route>
      <Route path={`${path}/diaryEntry`}>
        <DiaryEntry {...props} />
      </Route>
      <Route path={`${path}/whatCouldBeBetter`}>
        <WhatCouldBeBetter {...props} />
      </Route>
      <Route path={`${path}/whatWasGood`}>
        <WhatWasGood {...props} />
      </Route>
      <Route path={`${path}/dayInOneWord`}>
        <DayInOneWord {...props} />
      </Route>
      <Route path={`${path}/`}>
        <Mood {...props} />
      </Route>
    </Switch>
  );
}

export default QuestionnaireForm;
