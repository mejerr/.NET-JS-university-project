import { Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';
import ImageDetails from './components/ImageDetails';

export default (
  <Switch>
      <Route path='/home' component={Homepage} />
      <Route path='/gallery/images/:id' component={ImageDetails} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/' exact component={Homepage} />
      <Redirect to='/' />
  </Switch>
);