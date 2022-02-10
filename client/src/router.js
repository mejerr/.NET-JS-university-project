import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';
import ImageDetails from './components/ImageDetails';

const routes = (isAuthenticated) => isAuthenticated ? (
  <Switch>
    <Route path='/home' component={Homepage} />
    <Route path='/gallery/images/:id' component={ImageDetails} />
    <Route path='/gallery' component={Gallery} />
    <Route path='/' exact component={Homepage} />
    <Redirect to='/' />
  </Switch>
  ) : (
  <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/' exact component={Auth} />
      <Redirect to='/' />
  </Switch>
)

export default routes;