import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';

export default (
  <Switch>
      <Route path='/home' component={Homepage} />
      <Route path='/' exact component={Homepage} />
      <Redirect to='/' />
  </Switch>
);