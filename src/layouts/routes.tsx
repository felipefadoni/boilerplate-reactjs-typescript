import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteValidate from '../components/RouteValidate';
import { App } from './app/pages';
import { PageError401 } from './errors/401';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/error/401" component={PageError401} />
    <Route path="/error/500" component={() => <h1>Error 500</h1>} />

    <RouteValidate path="/admin" component={() => <h1>Page private admin</h1>} isPrivate />
  </Switch>
);

export default routes;
