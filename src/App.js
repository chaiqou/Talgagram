import { Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// lazy loading for splitting bundle

const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading... </div>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
