import { Route, Link, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Signup from "./pages/Signup";

// lazy loading for splitting bundle

const Login = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
