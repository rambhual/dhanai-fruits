import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";

const App = () => {
  return (
    <BrowserRouter>
      <ExamplesNavbar />
      <Switch>
        <Route path="/index" render={props => <LandingPage {...props} />} />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
