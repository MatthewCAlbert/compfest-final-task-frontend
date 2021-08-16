import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

/* Route */
import PublicRoute from "@/routes/PublicRoute";

/* Config */
import {privateRoute, publicRoute} from './config/route';

const App: React.FC = ()=>{
  const generatePublicRoute = () => {
    return publicRoute.map((entry, idx) => {
      return (
        <PublicRoute exact={entry.exact} key={idx} path={entry.path} Component={entry.component} />
      );
    });
  }

  return (
    <Router>
      <Switch>
        {generatePublicRoute()}
      </Switch>
    </Router>
  );
}

export default App;