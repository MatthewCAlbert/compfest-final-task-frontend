import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

/* Route */
import PublicRoute from "@/routes/PublicRoute";

/* Config */
import {privateRoute, publicRoute} from './config/route';
import PrivateRoute from './routes/ProtectedRoute';
import Page404 from './pages/404';
import { Toaster } from 'react-hot-toast';

const App: React.FC = ()=>{
  const generatePrivateRoute = () => {
    return privateRoute.map((entry, idx) => {
      return (
        <PrivateRoute requiredRoles={entry?.requiredRoles || []} exact={entry.exact} key={idx} path={entry.path} Component={entry.component} />
      );
    });
  }

  const generatePublicRoute = () => {
    return publicRoute.map((entry, idx) => {
      return (
        <PublicRoute exact={entry.exact} key={idx} path={entry.path} Component={entry.component} />
      );
    });
  }

  return (
    <>
    <Toaster position="top-center" reverseOrder={false} containerStyle={{marginTop:"50px"}} />
    <Router>
      <Switch>
        {generatePublicRoute()}
        {generatePrivateRoute()}
        <Route component={Page404} />
      </Switch>
    </Router>
    </>
  );
}

export default App;