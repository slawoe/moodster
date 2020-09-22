import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProfileView from "./profile/ProfileView";
import ProfileChange from "./profile/ProfileChange";

function Profile() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/change`}>
          <ProfileChange />
        </Route>
        <Route exact path={`${path}/`}>
          <ProfileView />
        </Route>
      </Switch>
    </>
  );
}

export default Profile;
