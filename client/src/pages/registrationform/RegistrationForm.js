import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import User from "./User";
import UserLogin from "./UserLogin";
import Moodster from "./Moodster";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
  { id: "user" },
  { id: "userlogin" },
  { id: "moodster" },
  { id: "review" },
  { id: "submit" },
];

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

const RegistrationForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "user":
      return <User {...props} />;
    case "userlogin":
      return <UserLogin {...props} />;
    case "moodster":
      return <Moodster {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default RegistrationForm;
