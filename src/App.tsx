import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

/* Route */
import PublicRoute from "@/routes/PublicRoute";
import ProtectedRoute from "@/routes/ProtectedRoute";

/* Config */
import route from './config/route';

function App() {
  const generateRoute = () => {
    return route.map((entry, idx) => {
      return (
        <ProtectedRoute exact={entry.exact} key={idx} path={entry.path} Component={<></>} />
      );
    });
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute path="/login" Component={<></>} />
          {generateRoute()}
        </Switch>
      </Router>
    </div>
  );
}

export default App;