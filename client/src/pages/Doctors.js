import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddDoctor from "./doctors/AddDoctor";
import DoctorsList from "./doctors/DoctorsList";
import DoctorsChangeAndDelete from "./doctors/DoctorsChangeAndDelete";

function Doctors() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/change/:id`}>
          <DoctorsChangeAndDelete />
        </Route>
        <Route path={`${path}/add`}>
          <AddDoctor />
        </Route>
        <Route exact path={`${path}/`}>
          <DoctorsList />
        </Route>
      </Switch>
    </>
  );
}

export default Doctors;
