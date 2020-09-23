import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddMedics from "./medics/AddMedics";
import MedicsList from "./medics/MedicsList";
import MedicsChangeandDelete from "./medics/MedicsChangeAndDelete";

function Medics() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/change/:id`}>
          <MedicsChangeandDelete />
        </Route>
        <Route path={`${path}/add`}>
          <AddMedics />
        </Route>
        <Route exact path={`${path}/`}>
          <MedicsList />
        </Route>
      </Switch>
    </>
  );
}

export default Medics;
