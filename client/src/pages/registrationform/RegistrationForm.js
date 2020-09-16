import React from "react";
import { useForm } from "react-hooks-helper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./User";
import UserLogin from "./UserLogin";
import Moodster from "./Moodster";
import Review from "./Review";
import Submit from "./Submit";

const defaultData = {
  firstName: null,
  lastName: null,
  nickName: null,
  birthDay: null,
  userName: null,
  password: null,
  passowordRepeat: null,
  moodstername: null,
};
function RegistrationForm() {
  const [formData, setForm] = useForm(defaultData);

  const props = {
    formData,
    setForm,
  };
  return (
    <>
      <Router>
        <Switch>
          <Route path="/submit">
            <Submit {...props} />
          </Route>
          <Route path="/review">
            <Review {...props} />
          </Route>
          <Route path="/moodster">
            <Moodster {...props} />
          </Route>
          <Route path="/userlogin">
            <UserLogin {...props}></UserLogin>
          </Route>
          <Route path="/">
            <User {...props}></User>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default RegistrationForm;
