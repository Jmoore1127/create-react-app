import React from 'react';
import Loadable from 'react-loadable';
import {Route, Switch } from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router';
import { history } from './redux';
import Loading from './components/loading';
import NotFound from './components/pages/not-found';

// NOTE: code-splitting only works with default exports. This is not ideal.
//       Default exports are configured in the <component directory>/index.js file to compensate.
const AsyncHome = Loadable({
  loader: () => import('./components/pages/home'),
  loading: Loading
});

export const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};